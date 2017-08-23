import React, { PropTypes, Component } from 'react';
import Button from '../button/index';

export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            nameList: ''
        }
    }
    handleListName(e){
        this.setState({ nameList: e.target.value })
    }
    clearFunc(){
        this.setState({ nameList: ''})
    }
    render(){
        const { newAdd, addListRequest, addList, addListCanceled } = this.props;
        function uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }
        const buttonData = [
            {
                title: 'Add',
                funcButton: e => {e.preventDefault();addList(this.state.nameList, uuidv4());this.clearFunc()}
            },
            {
                title: 'Cancel',
                funcButton: addListCanceled
            }
        ];
        const listCreator =
            <div>
                <input type="text" placeholder="Column name" onChange={this.handleListName.bind(this)}/>
                {
                    buttonData.map((item, index)=>
                        <Button key={index} onClick={item.funcButton}>
                            {item.title}
                        </Button>)
                }
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
