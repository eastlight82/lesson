import { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './App.css';
/*eslint-disable*/


function App() {
  var [따봉,따변]=useState(0);
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집',
   '파이썬 독학'] );  
  let [modal, setModal] = useState(false);
  var 발행= '2월 17일 발행';
  return (
    
    <div className="container">

      <nav className="title">
        <h4>Reactblog</h4>
      </nav>

      <div>
        {
          글제목.map((a,i) => {
            return(
              <div className="box" key={i}>
                <h3 onClick={() => {setModal(true)}}>{a}
                <span onClick={()=>{따변(따봉+1)}}> 👍 </span>{따봉}
                </h3>
                <p>{발행}</p>
              </div>)
          })
        }
      </div>
      

        {
          modal == true ? <Modal 글제목변경={글제목변경}
          글제목={글제목}/> : null
        }
   
    </div>

  );
}

function Modal(props){
  return (
    <div className="modal_css">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.글제목변경(['여자코트 추천', 
      '강남 우동맛집', '파이썬 독학'])}}>글수정</button>
    </div>
  )
}

export default App;
