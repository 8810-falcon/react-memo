import React from "react";
import { useState } from "react";
import MemoList from "../components/MemoList";

export default function Form() {
  const [list, setList] = useState([]);
  const addMemo = () => {
    const memo = document.getElementById("memo-input").value;
    console.log("入力確定" + memo);
    setList([...list, memo]);
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
