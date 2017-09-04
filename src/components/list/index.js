import React, { PropTypes, Component } from 'react';
import { DropTarget, DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import Card from '../card/index';
import CardContainer from "../cardContainer/index";
import Creator from "../creator/index";
import Base from "../base/index";

const listSource = {
    beginDrag(props) {
        return { indexList: props.indexList };
    }
};
function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}
const listTarget = {
    canDrop() {
        return true;
    },

    drop(props, monitor) {
        const item = monitor.getItem();
        const data = {
            indexList: item.indexList,
            indexListTarget: props.indexList,
        };
        console.log(data);
        props.moveList(data.indexList,data.indexListTarget);
    },
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
class List extends Component {
    render(){
        const {
            canDrop,
            isOver,
            connectDropTarget,
            connectDragSource,
            renameItemRequest,
            changerName,
            renameItemSuccess,
            renameItemCanceled,
            idItem,
            deleteItem,
            addItemRequest,
            addItem,
            addItemCanceled,
            newAdd,
            idList,
            nameList,
            cards,
            renameCardRequest,
            renameCardSuccess,
            renameCardCanceled,
            deleteCard,
            changerNameCard,
            idCardSelected,
            moveCard,
            moveList,
            indexList
        }=this.props;
        const isActive = canDrop && isOver;
        let list =
                <div>
                    <Base
                        condition={(changerName === true && idList===idItem)}
                        renameItemRequest={renameItemRequest}
                        renameItemSuccess={renameItemSuccess}
                        renameItemCanceled={renameItemCanceled}
                        deleteItem={deleteItem}
                        idItem={idList}
                        itemType="list"
                        currentName={nameList}
                        tag="3"/>
                    {cards.length!==0 ?
                        cards.map((item ,indexCard)=>(
                            <CardContainer
                                key={indexCard}
                                indexCard={indexCard}
                                indexList={indexList}
                                moveCard={moveCard}
                            >
                                <Card
                                    indexCard={indexCard}
                                    indexList={indexList}
                                    changerName={changerNameCard}
                                    idItem={idCardSelected}
                                    renameItemRequest={renameCardRequest}
                                    renameItemSuccess={renameCardSuccess}
                                    renameItemCanceled={renameCardCanceled}
                                    deleteCard={deleteCard}
                                    idList={idList}
                                    idCard={item.idCard}
                                    nameCard={item.nameCard}
                                />
                            </CardContainer>
                            )
                        ):
                        <CardContainer
                            key="0"
                            indexCard={0}
                            indexList={indexList}
                            moveCard={moveCard}
                        />
                    }
                    <Creator
                        addItemRequest={addItemRequest}
                        addItem={addItem}
                        addItemCanceled={addItemCanceled}
                        itemName="card"
                        condition={(newAdd === true && idList===idItem)}
                        idItem={idItem}
                        idCurrent={idList}
                    />
                </div>;
        return(
            connectDropTarget(
                connectDragSource(
                    <div>
                        {list}
                    </div>
                )
            )
        )
    }
}

List.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    changerName: PropTypes.bool.isRequired,
    idItem: PropTypes.string.isRequired,
    renameItemRequest: PropTypes.func.isRequired,
    renameItemSuccess: PropTypes.func.isRequired,
    renameItemCanceled: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    addItemCanceled: PropTypes.func.isRequired,
    newAdd: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.LIST, listTarget, collect)(DragSource(ItemTypes.LIST, listSource, collectSource)(List));