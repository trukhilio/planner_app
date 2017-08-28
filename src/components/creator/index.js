import React, { PropTypes, Component } from 'react';
import Button from '../button/index';

export default class Creator extends Component{
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
    render(){
        const { newAdd, addItemRequest, addItem, addItemCanceled, itemName } = this.props;
        function uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
        const listCreator =
            <div>
                <input type="text" placeholder={'New ' + itemName + ' name'} onChange={this.handleName.bind(this)}/>
                <Button onClick={e => {e.preventDefault();addItem(this.state.name, uuidv4());this.clearFunc()}}>
                    Add {itemName}
                </Button>
                <Button onClick={addItemCanceled}>
                    Cancel
                </Button>
            </div>;
        return(
            <div>
                { newAdd ?
                    listCreator
                     :
                    <div>
                        <Button
                            onClick={addItemRequest}>
                            Add new {itemName}...
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

Creator.propTypes = {
    newAdd: PropTypes.bool.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    addItemCanceled: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired
};
