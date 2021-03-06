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
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <p> Sender: {sender} </p>
        <p> Receiver: {receiver} </p>
        <p> Amount: {amount} </p>
        <p> Previous Hash: {prevHash} </p>
        <p> Hash: {hash} </p>
        <p> Timestamp: {timestamp} </p>
      </div>
    </div>
  );
};
