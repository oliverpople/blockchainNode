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
      <h3> Sender: {sender} </h3>
      <h3> Receiver: {receiver} </h3>
      <h3> Amount: {amount} </h3>
      <h3> Previous Hash: {prevHash} </h3>
      <h3> Hash: {hash} </h3>
      <h3> Timestamp: {timestamp} </h3>
    </div>
  );
};
