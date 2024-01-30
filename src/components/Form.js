import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import MemoList from "../components/MemoList";

export default function Form() {
  const [idList, setId] = useState([]);
  const addMemo = async () => {
    const memo = document.getElementById("memo-input").value;
    console.log("入力確定" + memo);
    const memoCollectionRef = collection(db, "react-memo");
    await addDoc(memoCollectionRef, {
      memo: memo,
    });
    document.getElementById("memo-input").value = "";
  };

  function handleDelete() {
    console.log("削除開始");
    const memoCollectionRef = collection(db, "react-memo");
    getDocs(memoCollectionRef).then((querySnapshot) => {
      setId(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      idList.map(async (memo) => {
        await deleteDoc(doc(db, "react-memo", memo.id));
      });
    });
  }
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
      <MemoList />
    </div>
  );
}
