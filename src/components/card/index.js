import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        let nameCard = "New card";
        return(
            <div>
                <h3>
                    {nameCard}
                </h3>
            </div>
        )
    }
}