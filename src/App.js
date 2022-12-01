import React, { useState } from "react";
import "./App.css"; // import도 안해놓고 css 안된다고 background 찍고있음 심각함..
function List(props) {
  return (
    <div className="list_child">
      <div className="l_c_content">{props.content.text}</div>
    </div>
  );
}
function App() {
  const title = "Todo List";

  const [contents, setContents] = useState([{ id: 1, text: "우울행. " }]);
  const [text, setText] = useState("");

  const addContentHandler = () => {
    const newContent = {
      id: contents.length + 1,
      text: text,
    };
    setContents([...contents, newContent]);
    setText("");
  };

  return (
    <div id="layout">
      <div id="input_zone">
        <input
          value={text}
          placeholder="내용을 입력해주세용"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addContentHandler}>추가하기</button>
      </div>
      <div id="h1_zone">
        <h1>{title}</h1>
      </div>
      <div id="content_zone">
        {contents.map((content) => {
          return <List content={content} key={content.id}></List>;
        })}
      </div>
    </div>
  );
}

export default App;
