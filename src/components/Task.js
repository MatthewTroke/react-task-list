import React, { Component } from 'react';

function Task(props) {
  return (
    <div className="card">
      <div className="card-body">
          {props.name}
      </div>
    </div>
  );
}

export default Task;
