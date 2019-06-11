import React from 'react';

function App() {
  return (
    <div className="main">
      <section className="add">
        <h1 className="header">Add a new task</h1>
        <input
          className="new-task-input"
          name="new-task"
          type="text"
        />
      </section>

      <section className="task-list">

      </section>
    </div>
  );
}

export default App;
