import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/index';
import * as mainActions from '../actions/mainAction';

class App extends Component {
    render(){
        const { main } = this.props;
        const { addList } = this.props.mainActions;
        return(
            <div>
                <Main
                    newAdd={main.newAdd}
                    addList={addList}
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