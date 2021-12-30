import React from "react";
import "./App.css";

function App() {
  const title = "Review App";
  const body = "This is the body";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  const loading = true;
  const showComments = true;

  // if(loading) return <h1>Loading...</h1>

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && (
        <div className="comments">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );

  // return React.createElement('div', { className: 'container' },
  //   React.createElement('h1', {}, 'My App')
  // )
}

export default App;
