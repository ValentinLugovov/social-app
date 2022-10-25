import {
  addMessageActionCreater,
  updateMessageActionCreater,
} from "../../redux/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
