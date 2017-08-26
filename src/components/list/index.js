import React, { PropTypes, Component } from 'react';
import Card from "../card/index";
import Button from "../button/index";

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            nameList: ''
        };
    }
    handleChangeListName(e){
        this.setState({ nameList: e.target.value })
    }
    clearFunc(){
        this.setState({ nameList: ''})
    }
    render(){
        const { listArr, renameListRequest, changerName, renameListSuccess, renameListCanceled, idItem }=this.props;
        let list =
            listArr.map((item, index)=>
                <div key={index}>
                    {(changerName === true && item.idList===idItem) ?
                        <div>
                            <input type="text" defaultValue={item.nameList} onChange={this.handleChangeListName.bind(this)}/>
                            <Button
                                onClick={e => {e.preventDefault();renameListSuccess(item.idList, this.state.nameList);this.clearFunc()}}>
                                Save
                            </Button>
                            <Button
                                onClick={renameListCanceled}>
                                Cancel
                            </Button>
                        </div>
                        :
                        <h3>{item.nameList}</h3>
                    }
                    <Button
                        onClick={e => {e.preventDefault();renameListRequest(item.idList)}}>
                        Rename list
                    </Button>
                    <Button>
                        Delete list
                    </Button>
                    <Card/>
                    <Button>
                        Add new card...
                    </Button>
                </div>
            );
        return(
            <div>
                {list}
            </div>
        )
    }
}

List.propTypes = {
    changerName: PropTypes.bool.isRequired,
    idItem: PropTypes.string.isRequired,
    listArr: PropTypes.array.isRequired,
    renameListRequest: PropTypes.func.isRequired,
    renameListSuccess: PropTypes.func.isRequired,
    renameListCanceled: PropTypes.func.isRequired
};