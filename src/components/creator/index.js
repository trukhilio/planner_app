import React, { PropTypes, Component } from 'react';
import Button from '../button/index';
import Input from '../input/index';
import { uuidv4 } from '../../utility/index';

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
        const { condition, addItemRequest, addItem, addItemCanceled, itemName, idItem, idCurrent } = this.props;
        return(
            <div>
                { condition ?
                    <div>
                        <Input placeholder={'New ' + itemName + ' name'} onChange={this.handleName.bind(this)}/>
                        <Button onClick={e => {e.preventDefault();addItem(this.state.name, uuidv4(), idItem);this.clearFunc()}}>
                            Add {itemName}
                        </Button>
                        <Button onClick={addItemCanceled}>
                            Cancel
                        </Button>
                    </div>
                     :
                    <div>
                        <Button
                            onClick={e => {e.preventDefault();addItemRequest(idCurrent)}}>
                            Add new {itemName}...
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

Creator.propTypes = {
    condition: PropTypes.bool.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    addItemCanceled: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired,
    idItem: PropTypes.string,
    idCurrent: PropTypes.string
};
