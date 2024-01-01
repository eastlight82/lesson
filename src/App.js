import { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './App.css';
/*eslint-disable*/


function App() {
  var [따봉,따변]=useState([0,0,0]);
  
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집',
   '파이썬 독학'] );

  let [modal, setModal] = useState(false);
  let [title_num, setTitle_num] = useState(0);
  var 발행= '2월 17일 발행';
  var [새제목, 새제목변경]=useState('');
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
                <h3 onClick={() => {setModal(true); setTitle_num(i)}}>{a}
                <span onClick={()=>{
                  따봉[i]+=1;
                  따변(따봉)}}> 👍 </span>{따봉[i]}
                </h3>
                <p>{발행}</p>
                <button onClick={() => {
                  글제목.splice(i,1)
                }}>삭제</button>
              </div>) 
          })
        }
      </div>
      <div>
        <input onInput={(e) => {새제목변경(e.target.value)}}>
        </input>
        <button onClick={() => {
          글제목.push(새제목);
          글제목변경(글제목)
          따봉.push(0);
          따변(따봉)}}>글발행</button>
     </div>
      

      {modal == true ? <Modal 글제목변경={글제목변경}
      글제목={글제목} title_num={title_num}/> : null}
   
    </div>

  );
}

function Modal(props){
  return (
    <div className="modal_css">
      <h4>{ props.글제목[props.title_num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy=[...props.글제목]
        copy[0]="여자코트 추천"
        props.글제목변경(copy)
        }}>글수정</button>
    </div>
  )
}

export default App;
