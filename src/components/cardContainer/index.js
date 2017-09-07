import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';

const cardTarget = {
    canDrop() {
        return true;
    },

    drop(props, monitor) {
        const item = monitor.getItem();
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
            indexCard,
            indexList,
            moveCard
        } = this.props;
        return(
            connectDropTarget(
                <div style={{minHeight: "50px"}}>
                    {this.props.children}
                </div>
            )
        )
    }
}
CardContainer.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
    indexCard: PropTypes.number.isRequired,
    indexList: PropTypes.number.isRequired
};
export default DropTarget(ItemTypes.CARD, cardTarget, collectTarget)(CardContainer)