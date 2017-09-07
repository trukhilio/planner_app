import React, { PropTypes, Component } from 'react';
import Button from '../button/index';
import Input from '../input/index';
import { uuidv4 } from '../../utility/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class Creator extends Component{
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
            <div className={s.creator}>
                { condition ?
                    <div className={s.container}>
                        <Input className={s.newCard} placeholder={'New ' + itemName + ' name'} onChange={this.handleName.bind(this)}/>
                        <div className={s.buttons}>
                            <Button className={s.addButton} onClick={e => {e.preventDefault();addItem(this.state.name, uuidv4(), idItem);this.clearFunc()}}>
                                Add {itemName}
                            </Button>
                            <Button className={s.cancelButton} onClick={addItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                     :
                    <Button
                        className={s.addNew}
                        onClick={e => {e.preventDefault();addItemRequest(idCurrent)}}>
                        Add new {itemName}...
                    </Button>
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
export default withStyles(s)(Creator)