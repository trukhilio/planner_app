import React, { PropTypes, Component } from 'react';
import Button from '../button/index';

export default class Main extends Component{
    render(){
        const { newAdd, addListRequest, addList, addListCanceled } = this.props;
        const listCreator =
            <div>
                <input type="text" placeholder="Column name"/>
                <Button
                    onClick={addList}>
                    Add
                </Button>
                <Button
                    onClick={addListCanceled}>
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
                            onClick={addListRequest}>
                            Add new list...
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

Main.propTypes = {
    newAdd: PropTypes.bool.isRequired,
    addListRequest: PropTypes.func.isRequired,
    addList: PropTypes.func.isRequired,
    addListCanceled: PropTypes.func.isRequired
};
