import Profile from './Profile';
import { addMessage, changeMessage, getProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
        if (!this.props.isAuth) { return <Navigate to="/login" /> }

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
        isAuth: state.auth.isAuth,
        data: state.profile,
    }
}

const ProfileContainerWithUrl = withRouter(ProfileContainer);


export default connect(mapSateToProps, { addMessage, changeMessage, getProfile })(ProfileContainerWithUrl);