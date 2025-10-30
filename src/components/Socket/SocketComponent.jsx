// import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:5000");
const SocketComponent = () => {
  const sendMessage = () => {
    socket.emit("send_message", { id: 1, name: "kasu man" });
  };
  return (
    <div className="container mx-auto custom-p-20">
      <button
        onClick={sendMessage}
        className="bg-green-500 px-5 py-3 rounded-xl text-white font-medium"
      >
        hello
      </button>
    </div>
  );
};

export default SocketComponent;
