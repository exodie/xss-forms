import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");

  const formHandler = () => {
    const regText = /^[^<>&'"]*$/.test(text);

    alert(regText ? text : "false");
  };

  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        placeholder="Введите произвольные данные"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Отправить на сервер</button>
    </form>
  );
}

export default App;
