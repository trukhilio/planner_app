import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

const Header = ()=>{
    return(
        <div>
            <h1 className={s.header}>
                Kanban board style
            </h1>
        </div>

    )
};

export default withStyles(s)(Header);
