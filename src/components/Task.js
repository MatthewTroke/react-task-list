import React from 'react';

function Task(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6> 
        <button onClick={props.delete} type="button" className="btn btn-outline-danger">Remove</button>
      </div>
    </div>
  );
}

export default Task;
