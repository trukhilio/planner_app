import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';

const cardTarget = {
    canDrop() {
        return true;
    },

    drop(props, monitor) {
        const item = monitor.getItem();
        console.log(item);
        console.log(props);
        const data = {
            indexList: item.indexList,
            indexCard: item.indexCard,
            indexListTarget: props.indexList,
            indexCardTarget: props.indexCard,
        };
        props.moveCard(data.indexCard,data.indexList,data.indexCardTarget,data.indexListTarget);
    },
};

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
class CardContainer extends Component{
    render(){
        const {
            connectDropTarget,
            canDrop,
            isDragging,
            indexCard,
            indexList,
            moveCard
        } = this.props;
        return(
            connectDropTarget(
                <div style={{height: "50px"}}>
                    {this.props.children}
                </div>
            )
        )
    }
}
export default DropTarget(ItemTypes.CARD, cardTarget, collectTarget)(CardContainer)