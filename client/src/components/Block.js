import React from "react";

export default ({
  key,
  sender,
  receiver,
  amount,
  preHash,
  hash,
  timestamp
}) => {
  return (
    <div>
      <h2>{key}</h2>
      <p>{sender}</p>
      <p>{receiver}</p>
      <p>{amount}</p>
      <p>{preHash}</p>
      <p>{hash}</p>
      <p>{timestamp}</p>
    </div>
  );
};
