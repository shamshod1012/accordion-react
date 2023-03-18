import React, { useState } from "react";

const Question = (props) => {

  const { id, title, info } = props;
  const { toggle } = props;

  return (
    <div className="container">
      <div className="small_container">
        <p> {title}</p>

        <div className="answer">{info}</div>
      </div>
      <button
        onClick={() => {
          toggle(id);
        }}
        className="plus"
      >
        {info.length?'-':'+'}
      </button>
    </div>
  );
};

export default Question;
