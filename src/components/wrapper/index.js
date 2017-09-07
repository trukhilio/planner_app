import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class Wrapper extends Component{
    render(){
        return(
            <div className={s.wrapper}>
                {this.props.children}
            </div>
        )
    }
}
export default withStyles(s)(Wrapper);
