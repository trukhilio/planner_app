import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/index';
import * as mainActions from '../actions/mainAction';
import * as listActions from '../actions/listAction';
import List from "../components/list/index";

class App extends Component {
    render(){
        const { main, list } = this.props;
        const { addListRequest, addList, addListCanceled } = this.props.mainActions;
        const { renameListRequest, renameListCanceled } = this.props.listActions;
        return(
            <div>
                <List
                    listArr={main.listArr}
                    renameListRequest={renameListRequest}
                    changerName={list.changerName}
                    idItem={list.idItem}
                    renameListCanceled={renameListCanceled}
                />
                <Main
                    newAdd={main.newAdd}
                    addListRequest={addListRequest}
                    addList={addList}
                    addListCanceled={addListCanceled}
                />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main,
        list: state.list
    }
}

function mapDispatchToProps(dispatch){
    return {
        mainActions: bindActionCreators(mainActions, dispatch),
        listActions: bindActionCreators(listActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)