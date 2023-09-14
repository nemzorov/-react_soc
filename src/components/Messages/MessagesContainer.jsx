import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/message-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeMessage: (text) => {
            dispatch(changeMessageActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;