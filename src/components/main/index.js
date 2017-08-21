import React, { Component } from 'react';
import Button from '../button/index';
import List from '../list/index'

export default class Main extends Component{
    render(){
        return(
            <div>
                <List/>
                <Button>
                    Add new list...
                </Button>
            </div>
        )
    }
}
