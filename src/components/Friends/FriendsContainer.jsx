import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers } from "../../redux/friends-reducer";
import Preloader from '../common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.sizePage, this.props.currentPage)
    }

    changePage = (pageNumber) => {
        this.props.getUsers(this.props.sizePage, pageNumber)
    }

    render() {
        if (!this.props.isAuth) { return <Navigate to="/login" /> }
        return (
            <>
                {this.props.preloader ?
                    <Preloader />
                    :
                    <Friends
                        totalCount={this.props.totalCount}
                        sizePage={this.props.sizePage}
                        data={this.props.data}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        setCurrentPage={this.changePage}
                        currentPage={this.props.currentPage}
                        followingProgress={this.props.followingProgress}
                    />
                }
            </>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        data: state.friends.friends,
        currentPage: state.friends.currentPage,
        sizePage: state.friends.sizePage,
        totalCount: state.friends.totalCount,
        preloader: state.friends.isPreloader,
        followingProgress: state.friends.followingInProgress,
    }
}



export default connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, getUsers })(FriendsContainer);