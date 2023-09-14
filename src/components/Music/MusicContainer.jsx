import Music from "./Music";
import { connect } from "react-redux";
import { estimateAC, setMusicAC } from "../../redux/music-reducer";

const stateToProps = (state) => {

    return {
        data: state.music.music,
        isAuth: state.auth.isAuth,
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

const MusicContainer = connect(stateToProps, dispatchToProps)(Music);

export default MusicContainer;