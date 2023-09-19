import Music from "./Music";
import { connect } from "react-redux";
import { estimateAC, setMusicAC } from "../../redux/music-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const stateToProps = (state) => {

    return {
        data: state.music.music,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        estimate: (id, effect) => {
            dispatch(estimateAC(id, effect))
        },
        setMusic: (music) => {
            dispatch(setMusicAC(music))
        }
    }
}


export default compose(
    connect(stateToProps, dispatchToProps),
    withAuthRedirect
)(Music)