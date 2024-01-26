import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="Main-header">メモアプリ</h3>
        <p>〜State使ってコンポーネント間のやりとりしてみた版〜</p>
      </header>
      <Form />
    </div>
  );
}

export default App;
