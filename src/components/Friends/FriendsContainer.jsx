import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers } from "../../redux/friends-reducer";
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.sizePage, this.props.currentPage)
    }

    changePage = (pageNumber) => {
        this.props.getUsers(this.props.sizePage, pageNumber)
    }

    render() {
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
        data: state.friends.friends,
        currentPage: state.friends.currentPage,
        sizePage: state.friends.sizePage,
        totalCount: state.friends.totalCount,
        preloader: state.friends.isPreloader,
        followingProgress: state.friends.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, getUsers }),
    withAuthRedirect
)(FriendsContainer);

