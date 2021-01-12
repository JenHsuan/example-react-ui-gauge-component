//Types
import {
    GET_RANDOM_NUMBERS,
    GET_RANDOM_OFFSETS
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANDOM_NUMBERS:
             return {
                ...state,
                randomNumbers: action.payload.randomNumbers
            };
        case GET_RANDOM_OFFSETS:
             return {
                ...state,
                randomOffsets: action.payload.randomOffsets
            };
        default:
            return state;
    }
};
