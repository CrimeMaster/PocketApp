import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChtPrvdr = ({ children }) => {
  const [chat, setChat] = useState("");

  return (
    <>
      <ChatContext.Provider value={{ chat, setChat }}>
        {children}
      </ChatContext.Provider>
    </>
  );
};
export default ChtPrvdr;