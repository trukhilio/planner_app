import React, { Component,PropTypes } from 'react';
import Button from '../button/index';
import Input from '../input/index';

export default class Base extends Component{
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
        const { condition, idItem, renameItemRequest, renameItemSuccess, renameItemCanceled, deleteItem, idParent, currentName, tag, itemType } = this.props;
        const Tagger = `h${tag}`;
        return(
            <div>
                { condition ?
                    <div>
                        <Input defaultValue={currentName} onChange={this.handleName.bind(this)}/>
                        <Button
                            onClick={e => {e.preventDefault();renameItemSuccess(idItem, this.state.name, idParent);this.clearFunc()}}>
                            Save
                        </Button>
                        <Button
                            onClick={renameItemCanceled}>
                            Cancel
                        </Button>
                    </div>
                    :
                    <Tagger>{currentName}</Tagger>
                }
                <Button onClick={e => {e.preventDefault();renameItemRequest(idItem)}}>
                    Rename {itemType}
                </Button>
                <Button onClick={e => {e.preventDefault();deleteItem(idItem, idParent)}}>
                    Delete {itemType}
                </Button>
            </div>
        )
    }
}

Base.propTypes = {
    condition: PropTypes.bool.isRequired,
    renameItemRequest: PropTypes.func.isRequired,
    renameItemSuccess: PropTypes.func.isRequired,
    renameItemCanceled: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    idItem: PropTypes.string.isRequired,
    idParent: PropTypes.string,
    itemType: PropTypes.string.isRequired,
    currentName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};
