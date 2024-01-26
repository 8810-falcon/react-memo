import React from "react";

export default function MemoList({ addMemo }) {
  if (addMemo != "") {
    let memoList = document.createElement("li");
    memoList.className = "memo-value";
    memoList.innerHTML = addMemo.pop();
    document.getElementById("memo-list").appendChild(memoList);
  }

  return (
    <div>
      <ul id="memo-list"></ul>
    </div>
  );
}
