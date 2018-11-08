import React from "react";

export default ({
  key,
  sender,
  receiver,
  amount,
  prevHash,
  hash,
  timestamp
}) => {
  return (
    <div>
      <p> Sender: {sender} </p>
      <p> Receiver: {receiver} </p>
      <p> Amount: {amount} </p>
      <p> Previous Hash: {prevHash} </p>
      <p> Hash: {hash} </p>
      <p> Timestamp: {timestamp} </p>
    </div>
  );
};
