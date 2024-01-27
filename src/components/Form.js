import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import MemoList from "../components/MemoList";

export default function Form() {
  const [list, setList] = useState([]);
  const addMemo = async () => {
    const memo = document.getElementById("memo-input").value;
    console.log("入力確定" + memo);
    setList([...list, memo]);
    const memoCollectionRef = collection(db, "react-memo");
    await addDoc(memoCollectionRef, {
      memo: memo,
    });
    /** 
    getDocs(memoCollectionRef).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => console.log(doc.data()));
    });
    */
    document.getElementById("memo-input").value = "";
  };
  return (
    <div>
      <form>
        <input
          id="memo-input"
          type="text"
          autoComplete="off"
          placeholder="入力"
        />
        <input onClick={addMemo} type="button" value="追加" />
        <input onClick={handleDelete} type="button" value="クリア" />
      </form>
      <MemoList addMemo={list} />
    </div>
  );
  function handleDelete() {
    setList(list, null);
    window.location.reload();
  }
}
