import React, { PropTypes, Component } from 'react';
import Menu from "../menu/index"
import Card from "../card/index";
import Button from "../button/index";

export default class List extends Component {
    render(){
        const {listArr}=this.props;
        let list =
            listArr.map((item, index)=>
                <div key={index}>
                    <h3>{item.nameList}</h3>
                    <Menu/>
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
    listArr: PropTypes.array.isRequired
};

