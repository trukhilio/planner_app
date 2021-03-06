import React, { Component,PropTypes } from 'react';
import Button from '../button/index';
import Input from '../input/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class Base extends Component{
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
    moveCaretAtEnd(e) {
        let temp_value = e.target.value;
        e.target.value = '';
        e.target.value = temp_value
    }
    render(){
        const { condition, idItem, renameItemRequest, renameItemSuccess, renameItemCanceled, deleteItem, idParent, currentName, tag, itemType } = this.props;
        const Tagger = `h${tag}`;
        return(
            <div>
                { condition ?
                    <div className={s.container}>
                        <Input onFocus={this.moveCaretAtEnd} className={s.inputer} defaultValue={currentName} onChange={this.handleName.bind(this)}/>
                        <div className={s.buttons}>
                            <Button
                                className={s.saveButton}
                                onClick={e => {e.preventDefault();renameItemSuccess(idItem, this.state.name, idParent);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                className={s.cancelButton}
                                onClick={renameItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                    :
                    <div className={s.container}>
                        <Tagger className={s.text}>{currentName}</Tagger>
                        <div className={s.buttons}>
                            <Button className={s.renameButton} title={"Rename " + itemType} onClick={e => {e.preventDefault();renameItemRequest(idItem)}}>
                                Rename {itemType}
                            </Button>
                            <Button className={s.delButton} title={"Delete " + itemType} onClick={e => {e.preventDefault();deleteItem(idItem, idParent)}}/>
                        </div>
                    </div>
                }
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
export default withStyles(s)(Base);
