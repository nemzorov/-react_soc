import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

export const withAuthRedirect = (Components) => {
  class ContainerRedirect extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Components {...this.props} />;
    }
  }

  return connect(mapStateToProps)(ContainerRedirect);
};
