import React from "react";
import {
  addMessageActionCreater,
  updateMessageActionCreater,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialog: state.messagesPage.dialog,
    newMessage: state.messagesPage.newMessage,
    message: state.messagesPage.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(updateMessageActionCreater(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreater());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
