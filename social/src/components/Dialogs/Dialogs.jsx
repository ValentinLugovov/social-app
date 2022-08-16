import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.messagesPage.dialog.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messages = props.messagesPage.message.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.updateMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
      <div>
        <textarea
          onChange={sendMessage}
          ref={newMessageElement}
          value={props.messagesPage.newMessage}
        ></textarea>
        <button onClick={addMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
