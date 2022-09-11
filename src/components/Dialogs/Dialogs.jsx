import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.dialog.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messages = props.message.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onChangeMessage = (event) => {
    let action = event.target.value;
    props.addMessage(action);
  };

  let onSendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
      <div>
        <div className={s.textarea}>
          <textarea
            placeholder="Enter your message"
            onChange={onChangeMessage}
            value={props.newMessage}
          />
        </div>
        <button onClick={onSendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
