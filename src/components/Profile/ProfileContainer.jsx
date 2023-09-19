import Profile from './Profile';
import { addMessage, changeMessage, getProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const withRouter = (Children) => {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }
    render() {

        if (!this.props.data.profile) {
            return (<Preloader />)
        }
        return (
            <Profile {...this.props} />
        )
    }
}

const mapSateToProps = (state) => {
    return {
        data: state.profile,
    }
}



export default compose(
    connect(mapSateToProps, { addMessage, changeMessage, getProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);