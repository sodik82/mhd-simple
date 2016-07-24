
'use strict';
import React,{ Component } from "react";

// import CodePush from 'react-native-code-push';
import { AppState, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Container } from 'native-base';

import VirtualTable from './components/virtualTable/';
import InfoPage from './components/InfoPage';

import { getGeoLocation } from './actions/app';
import theme from './themes/base-theme';

class App extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(state:string) {
      const { store } = this.props;
      if (state === 'active') {
        // disble CodePush for now
        // CodePush.sync({installMode: CodePush.InstallMode.IMMEDIATE});
        store.dispatch(getGeoLocation());
      }
    }
    render() {
        return (
          <Container theme={theme} style={{backgroundColor: '#565051'}}>
            <View style={{flex:1}}>
              <ScrollableTabView tabBarPosition="bottom"
                contentProps={{
                  contentContainerStyle: {flex:1},
                  keyboardShouldPersistTaps: true,
                }}
              >
                <VirtualTable tabLabel="Zastávky" />
                <InfoPage tabLabel="Info" />
              </ScrollableTabView>
            </View>
          </Container>
        );
    }
}

export default App
