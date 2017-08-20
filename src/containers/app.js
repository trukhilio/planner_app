import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/main/index';
// import * as pageActions from '../actions/pageAction';
// import * as userActions from '../actions/userAction';
// import Button from "../components/button/index";

class App extends Component {
    render(){
        return(
            <div>
                <Main/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         mainActions: bindActionCreators(mainActions, dispatch)
//     }
// }

export default connect(mapStateToProps
    // mapDispatchToProps
)(App)