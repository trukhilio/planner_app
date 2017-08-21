import React, { Component } from 'react';
import Button from '../button/index'

export default class Menu extends Component{
    render(){
        return(
            <div>
                <Button>
                    Rename list
                </Button>
                <Button>
                    Delete list
                </Button>
            </div>
        )
    }
}