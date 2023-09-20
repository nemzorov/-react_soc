import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    render() {
        return (
            <div className={this.props.style}>
                {this.state.editMode ?
                    <input autoFocus onBlur={() => { this.setState({ editMode: false }) }} type="text" placeholder={this.props.status} />
                    :
                    <span onDoubleClick={() => { this.setState({ editMode: true }) }}>{this.props.status}</span>
                }
            </div>
        );
    }
}

export default ProfileStatus;