import React, { PropTypes, Component } from 'react';
import Button from '../button/index';
import Card from '../card/index';

export default class List extends Component {
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
            itemArr,
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
            renameCardRequest,
            renameCardSuccess,
            renameCardCanceled,
            deleteCard,
            changerNameCard,
            idCardSelected
        }=this.props;

        function uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
        let list =
            itemArr.map((item, index)=>
                <div key={index}>
                    {(changerName === true && item.idList===idItem) ?
                        <div>
                            <input type="text" defaultValue={item.nameList} onChange={this.handleName.bind(this)}/>
                            <Button
                                onClick={e => {e.preventDefault();renameItemSuccess(item.idList, this.state.name);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                onClick={renameItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <h3>{item.nameList}</h3>
                    }
                    <Button onClick={e => {e.preventDefault();renameItemRequest(item.idList)}}>
                        Rename list
                    </Button>
                    <Button onClick={e => {e.preventDefault();deleteItem(item.idList)}}>
                        Delete list
                    </Button>
                    <Card
                        changerName={changerNameCard}
                        idItem={idCardSelected}
                        itemArr={item.cards}
                        renameItemRequest={renameCardRequest}
                        renameItemSuccess={renameCardSuccess}
                        renameItemCanceled={renameCardCanceled}
                        deleteCard={deleteCard}
                        idList={item.idList}
                    />
                    {(newAdd === true && item.idList===idItem) ?
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
                            onClick={e => {e.preventDefault();addItemRequest(item.idList)}}>
                            Add new card...
                        </Button>
                    }
                </div>
            );
        return(
            <div>
                {list}
            </div>
        )
    }
}

List.propTypes = {
    changerName: PropTypes.bool.isRequired,
    idItem: PropTypes.string.isRequired,
    itemArr: PropTypes.array.isRequired,
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