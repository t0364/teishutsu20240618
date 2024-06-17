import './App.css';
import {SetStateAction, useState, useRef} from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,doc, collection, addDoc,query, where, onSnapshot,setDoc, updateDoc, getDocs} from "firebase/firestore"


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



interface User {
  username: string;
  password: string;
  color: string;
}

const usersRef = collection(getFirestore(app), 'users');

async  function compare(ai:HTMLInputElement ,bi:HTMLInputElement)  {

  const q = query(usersRef, where('username', '==', ai?.value ),where('password', '==', bi?.value));

  const querySnapshot = await getDocs(q);

  if (querySnapshot !== undefined ){
    querySnapshot.forEach((f) => {
      let thecolor=  f.get('color');
      alert("こんにちは。" + ai?.value + "さん。");
      alert("あなたの好きな色は" +thecolor + "です。");
    })

  } 
  //手直ししたい部分1（パスワードが異なる場合に無視される）
  if (querySnapshot === undefined ){
    alert('ユーザ名かパスワードが異なります。')
  };
}
// //手直ししたい部分2-1（SetDOcにしてみる）
// async function  upDate(u:string, p:string, c:string)  {
//   const qr = query(usersRef, where('username', '==', u));
//   const qrSnapshot = await getDocs(qr);

//   if (qrSnapshot !== undefined ){
//   qrSnapshot.forEach((fr) => {
//     const theRef = doc(db, "users", fr.id);
//     alert("こんにちは、" + u + "さん。ユーザーネームが既に存在しています。");
//     if (where('password', '!=', p) && where('color', '!=', c)){
//       updateDoc(theRef, {password: p, color: c});
//       alert("パスワードと好きな色を変更しました。");

//     } else if (where('password', '==', p) && where('color', '!=', c)){
//       updateDoc(theRef, {color: c});
//       alert("好きな色を変更しました。");

//     } else {
//       updateDoc(theRef, {password: p});
//       alert("パスワードを変更しました。");
//     }

//   });
// } 
// if (qrSnapshot === undefined ){
  // addDoc(collection (db, "users"),{
  //   username: u,
  //   password: p,
  //   color: c
  // });
// }
// }



const signUp = () => {
  let usna = window.prompt("ユーザー名とパスワードを決めてください(1/3)", "ここにユーザー名を入力") as string;
  let pawo = window.prompt("ユーザー名とパスワードを決めてください(2/3)", "ここにパスワードを入力") as string;
  let coor = window.prompt("好きな色を教えてください(3/3)", "ここに好きな色を入力") as string;
  // //手直ししたい部分2-2
  // upDate(usna, pawo, coor);
  
  //手直しで消える部分2
  addDoc(collection (db, "users"),{
    username: usna,
    password: pawo,
    color: coor
  });

  
  alert("登録完了しました。");
}

const LogIn = () => {
  let a = document.getElementById('un') as HTMLInputElement;
  let b = document.getElementById('pw') as HTMLInputElement;

  compare(a,b);
  
  }


//最初の設定に使った箇所
// const signUp = () => { 
// setDoc(doc(db, "users", "Example"), {
//   username: "ariana",
//   password: "grande",
//   color: "blue"
// });
// }


function App() {

  return (
    
    <div className= "App">
      <div className= "Log_In">
        <h1>ログイン</h1>

        <div>
          <input id= "un" type="text" placeholder="ユーザー名"></input>
        </div>
        <div>
          <input id= "pw" className="ef" type="password" placeholder="パスワード"></input>
        </div>
        <br></br>
        <div>
          <button onClick={LogIn}>ログイン</button>
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
