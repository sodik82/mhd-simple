
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { BackAndroid, StatusBar } from 'react-native';
import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';
import Navigator from 'Navigator';

import Home from './components/home/';
import SideBar from './components/sideBar';
import BlankPage from './components/blankPage/';

export var globalNav = {};

class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;
        this.props.store.subscribe(() => {
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close()
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home') {
                return false;
            }
            else {
                this.popRoute();
                return true;
            }
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={ <SideBar navigator={this._navigator} /> }
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <StatusBar
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={() => {
                        return {
                            ...Navigator.SceneConfigs.FloatFromRight,
                            gestures: {}
                        };
                    }}
                    initialRoute={{id: 'home'}}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'home':
                return <Home navigator={navigator} />;
            case 'blankPage':
                return <BlankPage navigator={navigator} />;
            default :
                return <Home navigator={navigator}  />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
