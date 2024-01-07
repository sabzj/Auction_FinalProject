import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOFPDzMFAkvFWmKbAE1bVMxfKTQmSbDgI",
  authDomain: "online-auction-b4ddb.firebaseapp.com",
  projectId: "online-auction-b4ddb",
  storageBucket: "online-auction-b4ddb.appspot.com",
  messagingSenderId: "122966077110",
  appId: "1:122966077110:web:96645779d18c8b5db2c017",
  measurementId: "G-H0R7J2SQ19",
};

firebase.initializeApp(firebaseConfig);

const ChatApp = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection("messages");

    const unsubscribe = messagesRef.onSnapshot((snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const firestore = firebase.firestore();
    const messagesRef = firestore.collection("messages");

    await messagesRef.add({
      userId,
      text: newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.userId}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
