//Types
import {
    GET_RANDOM_NUMBERS,
    GET_RANDOM_OFFSETS
} from '../types';

//Actions

//The example for a synchronous action

const maxNumber = 100;
const offsetNumber = 20;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const getRandomNumbers = () => dispatch => {
    try {
        dispatch({
            type: GET_RANDOM_NUMBERS,
            payload: {randomNumbers: [getRandomInt(maxNumber), getRandomInt(maxNumber), getRandomInt(maxNumber), getRandomInt(maxNumber)]}
        });
    } catch (error) {
        console.log(error);
    }
};

export const getRandomOffsets = () => dispatch => {
    try {
        dispatch({
            type: GET_RANDOM_OFFSETS,
            payload: {randomOffsets: [getRandomInt(offsetNumber), getRandomInt(offsetNumber), getRandomInt(offsetNumber), getRandomInt(offsetNumber)]}
        });
    } catch (error) {
        console.log(error);
    }
};

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getUsers = () => async dispatch => {
    try {
        let url = 'http://rem-rest-api.herokuapp.com/api/users';
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: GET_USERS,
            payload: {users: data.data}
        });
    } catch (error) {
        console.log(error);
    }
};
