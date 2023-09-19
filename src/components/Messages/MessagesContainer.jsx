import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/message-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)