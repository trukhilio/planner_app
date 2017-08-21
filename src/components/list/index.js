import React, { Component } from 'react';
import Menu from "../menu/index"
import Card from "../card/index";
import Button from "../button/index";

export default class List extends Component {
    render(){
        let nameList = 'Ola';
        return(
            <div>
                <h3>{nameList}</h3>
                <Menu/>
                <Card/>
                <Button>
                    Add new card...
                </Button>
            </div>
        )
    }
}
