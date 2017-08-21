import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        const { nameCard }= this.props;
        return(
            <div>
                <h3>
                    {nameCard}
                </h3>
            </div>
        )
    }
}