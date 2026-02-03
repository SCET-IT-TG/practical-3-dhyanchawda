import React, { useState } from "react";

function TweetInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const isInvalid = charCount === 0 || charCount > 50;

  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Tweet Input</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows="3"
        cols="30"
        placeholder="What's happening?"
      />
      <div
        style={{
          marginTop: "0.5rem",
          color: charCount > 50 ? "red" : "black",
        }}
      >
        {charCount}/50
      </div>
      <button disabled={isInvalid} style={{ marginTop: "0.5rem" }}>
        Tweet
      </button>
    </div>
  );
}

export default TweetInput;
