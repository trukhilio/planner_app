import React, { PropTypes, Component } from 'react';
import Card from "../card/index";
import Button from "../button/index";

export default class List extends Component {
    render(){
        const { listArr, renameListRequest, changerName, renameListCanceled, idItem }=this.props;
        let list =
            listArr.map((item)=>
                <div key={item.idList}>
                    {(changerName === true && item.idList===idItem) ?
                        <div>
                            <input type="text"/>
                            <Button>Save</Button>
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
    listArr: PropTypes.array.isRequired,
    renameListRequest: PropTypes.func.isRequired,
    renameListCanceled: PropTypes.func.isRequired
};

