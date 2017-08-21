import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';

const initialState = {
    newAdd: false
};

export default function main(state=initialState, action){
    switch (action.type) {
        case ADD_LIST_REQUEST:
            return { ...state, newAdd: true };

        default:
            return state;
    }
}