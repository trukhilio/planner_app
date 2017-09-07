import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Creator from '../components/creator/index';
import * as mainActions from '../actions/mainAction';
import List from '../components/list/index';
import MainContainer from '../components/mainContainer/index';
import Header from '../components/header/index';

class App extends Component {
    render(){
        const { main } = this.props;
        const {
            addListRequest,
            addList,
            addListCanceled,
            renameListRequest,
            renameListCanceled,
            renameListSuccess,
            deleteList,
            addCard,
            addCardCanceled,
            addCardRequest,
            renameCardRequest,
            renameCardSuccess,
            renameCardCanceled,
            deleteCard,
            moveCard,
            moveList
        } = this.props.mainActions;
        return(
            <div>
                <Header/>
                <MainContainer>
                    {main.listArr.map((item,indexList)=>(
                            <List
                                renameItemRequest={renameListRequest}
                                changerName={main.changerNameList}
                                idItem={main.idListSelected}
                                renameItemCanceled={renameListCanceled}
                                renameItemSuccess={renameListSuccess}
                                deleteItem={deleteList}
                                addItemRequest={addCardRequest}
                                newAdd={main.newAddCard}
                                addItem={addCard}
                                addItemCanceled={addCardCanceled}
                                renameCardRequest={renameCardRequest}
                                renameCardSuccess={renameCardSuccess}
                                renameCardCanceled={renameCardCanceled}
                                deleteCard={deleteCard}
                                changerNameCard={main.changerNameCard}
                                idCardSelected={main.idCardSelected}
                                idList={item.idList}
                                nameList={item.nameList}
                                cards={item.cards}
                                key={indexList}
                                indexList={indexList}
                                moveCard={moveCard}
                                moveList={moveList}
                            />
                        )
                    )}
                    <Creator
                        condition={main.newAddList}
                        addItemRequest={addListRequest}
                        addItem={addList}
                        addItemCanceled={addListCanceled}
                        itemName='list'
                    />
                </MainContainer>
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main
    }
}

function mapDispatchToProps(dispatch){
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));