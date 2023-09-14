import React from "react";
import Header from "./Header";
import { getAuth } from "../../redux/auth-reducer";
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }
    render() {
        return (
            <Header {...this.props} />
        )
    };
}

const mapStateToProps = (state) => {
    return {
        data: state.auth,
    }
}

export default connect(mapStateToProps, { getAuth })(HeaderContainer);