import { useState } from "react";
import Question from "./components/Question";
import data from "./data/data";
import "./App.css";

function App() {
  const [Data, setData] = useState(data);
  const [currentEl, setCurrentEl] = useState("");

  function close(id) {
    if (currentEl === id) {
      setCurrentEl("");
    } else {
      setCurrentEl(id);
    }
  }

  return (
    <div className="App">
      <div className="all_container">
        <p className="title">questions and answers about login</p>
        <div className="questions_container">
          {Data.map((element) => {
            return (
              <Question
                key={element.id}
                id={element.id}
                title={element.title}
                info={element.id === currentEl ? element.info : ""}
                toggle={close}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
