import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/index';
import * as mainActions from '../actions/mainAction';
import List from "../components/list/index";

class App extends Component {
    render(){
        const { main } = this.props;
        const { addListRequest, addList, addListCanceled } = this.props.mainActions;
        return(
            <div>
                <List/>
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
        main: state.main
    }
}

function mapDispatchToProps(dispatch){
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)