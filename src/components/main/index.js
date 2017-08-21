import React, { PropTypes, Component } from 'react';
import Button from '../button/index';
import List from '../list/index'

export default class Main extends Component{
    render(){
        const { newAdd, addList } = this.props;
        const listCreator =
            <div>
                <input type="text" placeholder="Column name"/>
                <Button>
                    Add
                </Button>
                <Button>
                    Cancel
                </Button>
            </div>;
        return(
            <div>
                { newAdd ?
                    listCreator
                     :
                    <div>
                        <List/>
                        <Button
                            onClick={addList}>
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
    addList: PropTypes.func.isRequired
};
