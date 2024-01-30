import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function MemoList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const memoCollectionRef = collection(db, "react-memo");
    getDocs(memoCollectionRef).then((querySnapshot) => {
      setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  });
  return (
    <div>
      <ul id="memo-list">
        {list.map((value) => (
          <li key={value.id} className="memo-value">
            {value.memo}
          </li>
        ))}
      </ul>
    </div>
  );
}
