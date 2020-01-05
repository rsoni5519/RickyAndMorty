import axios from 'axios';

export const LOAD_DATA = 'Load_Characters';

export const load_character = () => {
    return (dispatch, getState) => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => {
            dispatch({type: 'Load_Characters', value: res.data.results});
        });
    }
}