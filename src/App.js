import { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './App.css';
/*eslint-disable*/


function App() {
  var [hi,c1]=useState(0);
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );  
  var 발행= '2월 17일 발행';
  return (
    
    <div className="container">

      <div>
        <button onClick={() => {
          글제목[0] = '여자코트 추천';
          글제목변경(글제목)
        }}>안녕</button>
        <nav className="title" >
          <h4>Reactblog {hi}</h4>
        </nav>
      </div>
      <div className="box">
        <h3>{글제목[0]}</h3>
        <p>{발행}</p>
      </div>
      <div className="box">
        <h3>{글제목[1]}</h3>
        <p>{발행}</p>
      </div>
      <div className="box">
        <h3>{글제목[2]}</h3>
        <p>{발행}</p>
      </div>
    </div>

  );
}



export default App;
