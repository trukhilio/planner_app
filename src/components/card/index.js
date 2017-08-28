import React, { Component } from 'react';
import Button from '../button/index';

export default class Card extends Component{
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
        const { itemArr,
                changerName,
                idItem,
                renameItemRequest,
                renameItemSuccess,
                renameItemCanceled,
                deleteCard,
                idList
        } = this.props;
        let cards =
            itemArr.map((item, index)=>
                <div key={index}>
                    {(changerName === true && item.idCard===idItem) ?
                        <div>
                            <input type="text" defaultValue={item.nameCard} onChange={this.handleName.bind(this)}/>
                            <Button
                                onClick={e => {e.preventDefault();renameItemSuccess(item.idCard, idList, this.state.name);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                onClick={renameItemCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <h4>{item.nameCard}</h4>
                    }
                    <Button onClick={e => {e.preventDefault();renameItemRequest(item.idCard)}}>
                        Rename card
                    </Button>
                    <Button onClick={e => {e.preventDefault();deleteCard(item.idCard, idList)}}>
                        Delete card
                    </Button>
                </div>
            );
        return(
            <div>
                { cards }
            </div>
        )
    }
}

// Card.propTypes = {
//     newAddCard: PropTypes.bool.isRequired,
//     addCardCanceled: PropTypes.func.isRequired,
//     addCard: PropTypes.func.isRequired,
//     addCardRequest: PropTypes.func.isRequired
// };
