import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialog.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messages = props.state.message.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
