import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(
  //   // 1st argument: side effect (callback function)
  //   () => {
  //     console.log("useEffect called")},
  //   //2nd argument: dependencies array. Could be empty
  //   []
  // );

  useEffect(() => {
    document.title = text;
  }, [text]);
  //Here, what we're telling React is:
  //"Hey React! When my component renders, I also want you to update the document's title. But you should only do that when the text variable changes."

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);
  // With this side effect, we're telling React:
  //"Hey React! When my App component renders, I also want you to set this timeout function. In 5 seconds, you should update state and set the count back to 0. You should only set this timeout function once, I don't want a bunch of timeouts running every time my component updates. kthxbye!"

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
