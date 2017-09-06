import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import Base from "../base/index";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

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
        return(
                connectDragSource(
                    <div className={s.card}>
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
                            tag="3"
                        />
                    </div>
                )
        )
    }
}

Card.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    changerName: PropTypes.bool.isRequired,
    idItem: PropTypes.string.isRequired,
    renameItemRequest: PropTypes.func.isRequired,
    renameItemSuccess: PropTypes.func.isRequired,
    renameItemCanceled: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    idList: PropTypes.string.isRequired,
    idCard: PropTypes.string.isRequired,
    nameCard: PropTypes.string.isRequired,
    indexCard: PropTypes.number.isRequired,
    indexList: PropTypes.number.isRequired
};
export default DragSource(ItemTypes.CARD, cardSource, collectSource)(withStyles(s)(Card));