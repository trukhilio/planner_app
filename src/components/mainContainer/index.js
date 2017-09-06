import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class MainContainer extends Component{
    render(){
        return(
            <div className={s.maincontainer}>
                {this.props.children}
            </div>
        )
    }
}
export default withStyles(s)(MainContainer);