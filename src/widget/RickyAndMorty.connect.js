import {connect} from 'react-redux';

import RickyAndMortyMainView from './components/RickyAndMorty.mainView';
import * as Action from '../store/Action';

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadData: () => {
            dispatch(Action.load_character());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RickyAndMortyMainView);