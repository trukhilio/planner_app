import React, { Component } from 'react';
import Button from '../button/index';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';

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
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }
    handleName(e){
        this.setState({ name: e.target.value })
    }
    clearFunc(){
        this.setState({ name: ''})
    }
    render(props){
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
        const opacity = isDragging ? 0.4 : 1;
        let cards =
                <div>
                    {(changerName === true && idCard===idItem) ?
                        <div>
                            <input type="text" defaultValue={nameCard} onChange={this.handleName.bind(this)}/>
                            <Button
                                onClick={e => {e.preventDefault();renameItemSuccess(idCard, idList, this.state.name);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                onClick={renameItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <h4>{nameCard}</h4>
                    }
                    <Button onClick={e => {e.preventDefault();renameItemRequest(idCard)}}>
                        Rename card
                    </Button>
                    <Button onClick={e => {e.preventDefault();deleteCard(idCard, idList)}}>
                        Delete card
                    </Button>
                </div>;
        return(
                connectDragSource( cards )
        )
    }
}

// Card.propTypes = {
//     connectDragSource: PropTypes.func.isRequired,
//     isDragging: PropTypes.bool.isRequired,
// };
export default DragSource(ItemTypes.CARD, cardSource, collectSource)(Card);