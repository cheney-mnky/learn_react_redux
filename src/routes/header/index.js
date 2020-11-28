/**
 * header容器组件
 */
import React from 'react';
import View from './View';
import { connect } from 'react-redux';
import { showSideAction } from '../side/reducer';
import { setTitleAction } from './reducer';
import { bindActionCreators } from 'redux';

class Header extends React.Component {
    render(){
        return <View {...this.props}/>
    }
}

function mapStateToProps(state) {
    return {
        title: state.header.title,
        show: state.side.show
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showSide: bindActionCreators(showSideAction, dispatch),
        setTitle: bindActionCreators(setTitleAction, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
