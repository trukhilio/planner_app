import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import Button from '../button/index';
import Card from '../card/index';
import CardContainer from "../cardContainer/index";

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
        // console.log(item);
        // console.log(props);
        // const data = {
        //     indexList: item.parentIndex,
        //     indexCard: item.index,
        //     indexListTarget: props.parentIndex,
        //     indexCardTarget: props.index,
        // };
        // props.moveCard(data.indexCard,data.indexList,data.indexCardTarget,data.indexListTarget);
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
    constructor(){
        super();
        this.state = {
            name: ''
        };
    }
    handleName(e){
        this.setState({ name: e.target.value })
    }
    clearFunc(){
        this.setState({ name: ''})
    }
    render(){
        const {
            canDrop,
            isOver,
            connectDropTarget,
            renameItemRequest,
            changerName,
            renameItemSuccess,
            renameItemCanceled,
            idItem,
            deleteItem,
            itemName,
            addItemRequest,
            addItem,
            addItemCanceled,
            newAdd,
            idList,
            nameList,
            cards,
            key,
            renameCardRequest,
            renameCardSuccess,
            renameCardCanceled,
            deleteCard,
            changerNameCard,
            idCardSelected,
            moveCard,
            indexList
        }=this.props;
        const isActive = canDrop && isOver;
        function uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
        let list =
                <div>
                    {(changerName === true && idList===idItem) ?
                        <div>
                            <input type="text" defaultValue={nameList} onChange={this.handleName.bind(this)}/>
                            <Button
                                onClick={e => {e.preventDefault();renameItemSuccess(idList, this.state.name);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                onClick={renameItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <h3>{nameList}</h3>
                    }
                    <Button onClick={e => {e.preventDefault();renameItemRequest(idList)}}>
                        Rename list
                    </Button>
                    <Button onClick={e => {e.preventDefault();deleteItem(idList)}}>
                        Delete list
                    </Button>
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
                    {(newAdd === true && idList===idItem) ?
                        <div>
                            <input type="text" placeholder={'New ' + itemName + ' name'} onChange={this.handleName.bind(this)}/>
                            <Button onClick={e => {e.preventDefault();addItem(this.state.name, uuidv4(), idItem);this.clearFunc()}}>
                                Add {itemName}
                            </Button>
                            <Button onClick={addItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <Button
                            onClick={e => {e.preventDefault();addItemRequest(idList)}}>
                            Add new card...
                        </Button>
                    }
                </div>;
        return(
            connectDropTarget(
                <div>
                    {list}
                </div>
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
    itemName: PropTypes.string.isRequired,
    addItem: PropTypes.func.isRequired,
    addItemCanceled: PropTypes.func.isRequired,
    newAdd: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.LIST, listTarget, collect)(List);