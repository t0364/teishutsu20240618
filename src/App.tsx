import './App.css';
import {SetStateAction, useState, useRef} from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,doc, onSnapshot,setDoc, updateDoc, getDoc} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRvXB7CUbFZud5klN-pkCwmrRGhe5fQ0",
  authDomain: "teishutsu0618.firebaseapp.com",
  projectId: "teishutsu0618",
  storageBucket: "teishutsu0618.appspot.com",
  messagingSenderId: "529408011701",
  appId: "1:529408011701:web:e721ae42d37346bd443dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, "collection", "document")

// const IncButton = ({diff, val, setVal}:{
//   diff: number,
//   val: number,
//   setVal: React.Dispatch<SetStateAction<number>>
// }) =>{
//   const clicked = () => {
//     setVal(val + diff);
//     setDoc(docRef, {count: val + diff});
//   }
//   return(
//     <button onClick={clicked}>{diff}</button>
//   )
// }

  const signUp = () => {
    let username = window.prompt("ユーザー名とパスワードを決めてください(1/2)", "ここにユーザー名を入力");
    let password = window.prompt("ユーザー名とパスワードを決めてください(2/2)", "ここにパスワードを入力");
      
    alert("登録完了しました");
  }




function App() {
//   const [cnt, setCnt] = useState(0);
//   const [memo,setMemo] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
  // const cliked = () =>{
  //   setCnt(cnt + 1)
  // }

  // onSnapshot(docRef, (snapshot) => {
  //   const d = snapshot.data();
  //   // ↓if (d != undefined) d["count"]　前半がFなら後半は計算しないからundefinedでも大丈夫
  //   // ↓d && d["count"]
  //   setCnt(d?.count);
  //   setMemo(d?.memo);
  //   inputRef?.current?.setAttribute("value", d?.memo);
  //   // inputRef.value = memo;

  // }
// )


  return (
    
    // <div className="App">
    //   <IncButton diff={-1} val={cnt} setVal={setCnt} />
    //   {cnt}
    //   <IncButton diff={1} val={cnt} setVal={setCnt} />
    //   <div></div>
    //   <button onClick={()=>{setCnt(0);setDoc(docRef,{count:0});}}>reset</button>
    //   {/* <button onClick={()=>{setCnt(0);}}>reset</button> */}
    //   <br></br>
    //   memo : <input ref= {inputRef} value = {memo}></input>
    //   <button onClick={
    //     () =>{
    //       const s = inputRef.current?.value;
    //       updateDoc(docRef,{memo: s});
    //     }}>更新</button>
    // </div>

    // <div className="App">
    //   <div className= "LogIn">
    //     <div>
    //       <div>ユーザー名</div>
    //       <input type= "text" placeholder= "username here"></input>
    //     </div>
    //     <div>
    //       <div>パスワード</div>
    //       <input type= "text" placeholder= "passeord here"></input>
    //     </div>
    //   </div>
    // </div>

    <div className= "App">
      <div className= "LogIn">
        <h1>ログイン</h1>

        <div>
          <input className="ef" type="text" placeholder="ユーザー名"></input>
          <span className="focus_line"></span>
        </div>
        <div>
          <input className="ef" type="password" placeholder="パスワード"></input>
          <span className="focus_line"></span>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div>
          <p>新規登録は</p>
          <button onClick={signUp}>こちら</button>
        </div>

      </div>
    </div>
    
  );
}

export default App;
