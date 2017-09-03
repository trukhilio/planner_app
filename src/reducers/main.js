import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';
import {
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_CANCELED,
    DELETE_LIST,
    ADD_CARD_REQUEST,
    ADD_CARD_SUCCESS,
    ADD_CARD_CANCELED,
    MOVE_LIST
} from '../constants/list';
import {
    RENAME_CARD_REQUEST,
    RENAME_CARD_SUCCESS,
    RENAME_CARD_CANCELED,
    DELETE_CARD,
    MOVE_CARD
} from '../constants/card'
import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    newAddList: false,
    changerNameList: false,
    newAddCard: false,
    changerNameCard: false,
    idListSelected: '',
    idCardSelected: '',
    listArr: []
};

export default function main(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.main;
            if (incoming) return {...state, ...incoming };
            return state;
        case ADD_LIST_REQUEST:
            return { ...state, newAddList: true };
        case ADD_LIST_SUCCESS:
            if (action.name === ''){
                action.name = 'New Column'
            }
            const list = {
                nameList: action.name,
                idList: action.id,
                cards: []
            };
            let newItem =  state.listArr.concat(list);
            return { ...state, newAddList: false, listArr: newItem };
        case ADD_LIST_CANCELED:
            return { ...state, newAddList: false };
        case RENAME_LIST_REQUEST:
            return { ...state, changerNameList: true, idListSelected: action.payload };
        case RENAME_LIST_SUCCESS:
            let renameItem = state.listArr.map(item=>
                item.idList === action.id ?
                    {...item, nameList: action.name}:
                    item
            );
            return { ...state, changerNameList: false, idListSelected: '', listArr: renameItem};
        case RENAME_LIST_CANCELED:
            return { ...state, changerNameList: false, idListSelected: action.payload };
        case DELETE_LIST:
            let deleteItem = state.listArr.filter( item => item.idList !== action.id );
            return { ...state, listArr: deleteItem};
        case ADD_CARD_REQUEST:
            return { ...state, newAddCard: true, idListSelected: action.id };
        case ADD_CARD_SUCCESS:
            if (action.name === ''){
                action.name = 'New Card'
            }
            const card = {
                nameCard: action.name,
                idCard: action.idCard
            };
            let cardList;
            let addCard = state.listArr.map(item=> {
                    if (item.idList === action.idList) {
                        cardList = item.cards.concat(card);
                        return {...item, cards: cardList}
                    } else {
                        return item
                    }
                }
            );
            return { ...state, newAddCard: false, idListSelected: '', listArr: addCard};
        case ADD_CARD_CANCELED:
            return { ...state, newAddCard: false, idListSelected: '' };
        case RENAME_CARD_REQUEST:
            return { ...state, changerNameCard: true, idCardSelected: action.id };
        case RENAME_CARD_SUCCESS:
            let renameCard = state.listArr.map(item=> {
                    if (item.idList === action.idList) {
                        let cardsArr = item.cards.map(item=>
                            item.idCard === action.idCard ?
                                {...item, nameCard: action.name}:
                                item
                        );
                        return {...item, cards: cardsArr}
                    } else {
                        return item
                    }
                }
            );
            return { ...state, changerNameCard: false, idCardSelected: '', listArr: renameCard};
        case RENAME_CARD_CANCELED:
            return { ...state, changerNameCard: false, idCardSelected: '' };
        case DELETE_CARD:
            let deleteCard = state.listArr.map(item=> {
                if (item.idList === action.idList) {
                    let deleteCardItem = item.cards.filter( item => item.idCard !== action.idCard );
                    return {...item, cards: deleteCardItem}
                } else {
                    return item
                }
                }
            );
            return { ...state, listArr: deleteCard};
        case MOVE_CARD:
            const movingCardArr = state.listArr.slice();
            const { indexCard, indexList, indexCardTarget, indexListTarget } = action;
            if (indexList === indexListTarget ) {
                movingCardArr[indexList].cards.splice(indexCardTarget, 0, movingCardArr[indexList].cards.splice(indexCard, 1)[0]);
            } else {
                movingCardArr[indexListTarget].cards.splice(indexListTarget, 0, movingCardArr[indexList].cards[indexCard]);
                movingCardArr[indexList].cards.splice(indexCard, 1);
            }
            return { ...state, listArr: movingCardArr};
        case MOVE_LIST:
            const movingListArr = state.listArr.slice();
            const { indexOldList, indexNewListTarget } = action;
            const temp = movingListArr.splice(indexOldList, 1)[0];
            movingListArr.splice(indexNewListTarget, 0, temp);
            return { ...state, listArr: movingListArr};
        default:
            return state;
    }
}