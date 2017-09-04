import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import Base from "../base/index";

const cardSource = {
    beginDrag(props) {
        return { indexCard: props.indexCard, indexList: props.indexList };
    }
};
function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component{
    render(){
        const {
                isDragging,
                connectDragSource,
                changerName,
                idItem,
                renameItemRequest,
                renameItemSuccess,
                renameItemCanceled,
                deleteCard,
                idList,
                idCard,
                nameCard,
                indexCard,
                indexList
        } = this.props;
        // const opacity = isDragging ? 1 : 1;
        return(
                connectDragSource(
                    <div>
                        <Base
                            condition={(changerName === true && idCard===idItem)}
                            idItem={idCard}
                            renameItemRequest={renameItemRequest}
                            renameItemSuccess={renameItemSuccess}
                            renameItemCanceled={renameItemCanceled}
                            deleteItem={deleteCard}
                            idParent={idList}
                            currentName={nameCard}
                            itemType='card'
                            tag="4"
                        />
                    </div>
                )
        )
    }
}

Card.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
};
export default DragSource(ItemTypes.CARD, cardSource, collectSource)(Card);