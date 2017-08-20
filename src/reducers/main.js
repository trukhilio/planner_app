import ADD_NEW_LIST from '../constants/main';

const initialState = {
    listArr: []
};

export default function main(state=initialState, action){
    switch (action.type) {
        case ADD_NEW_LIST:
            return { ...state, listArr: action.payload };

        default:
            return state;
    }
}