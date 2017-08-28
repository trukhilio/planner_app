import React, { PropTypes, Component } from 'react';
import Button from '../button/index';
import Creator from '../creator/index';

export default class Main extends Component{
    render(props){
        return(
            <div>
                { newAdd ?
                    <Creator
                        newAdd={}
                        addItemRequest={}
                        addItem={}
                        addItemCanceled={}
                        itemName=""
                    />
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

Main.propTypes = {
    newAdd: PropTypes.bool.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    addItemCanceled: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired
};

