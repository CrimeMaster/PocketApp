import React, { useContext, useState } from 'react';
import Left from '../Packet/left/Left';
import Right from '../Packet/right/Right';
import { ChatContext } from '../Context/ChtPrvdr';
import Chats from '../Packet/Chats/Chats';
import styles from './group.module.css'
function Group() {
  const { chat } = useContext(ChatContext);
  const [currentChat, setCurrentChat] = useState(chat);

  const handleArrowClick = () => {
    setCurrentChat(null);
  };
  return (
    <div style={
      {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        maxHeight: "100vh",
        overflow: "hidden",
        
      }
    }>
      <Left onGroupClick={setCurrentChat} />
      {currentChat ? (
        <Chats groupName={currentChat} onArrowClick={handleArrowClick} />
      ) : (
      <Right/>
      )}
    </div>
  );
}

export default Group;
