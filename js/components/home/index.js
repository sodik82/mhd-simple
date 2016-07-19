
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, H3, } from 'native-base';
import { View, WebView } from 'react-native';
const dismissKeyboard = require('dismissKeyboard');
import KeyboardSpacer from 'react-native-keyboard-spacer';

import * as virtualTableActions from '../../actions/virtualTable';

import StopInput from '../StopInput';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        console.log("home props", this.props.url);
        const { inputBlur, inputSet, inputFocus, inputText, suggestions, selectSuggestion, url } = this.props;
        return (
            <Container theme={theme} style={{backgroundColor: '#565051'}}>
                <View style={styles.main}>
                  <View style={[styles.row, {flex:1, flexDirection: 'column'}]}>
                      <View>
                        <H3>
                            MHD simple
                        </H3>
                      </View>
                      {url && (
                        <WebView
                          source={{uri: url}}
                          style={{marginTop: 20, flex: 1, }}
                        />)}
                  </View>
                  <View>
                    <StopInput
                      onBlur={inputBlur}
                      onChangeText={inputSet}
                      onFocus={inputFocus}
                      value={inputText}
                      suggestions={suggestions}
                      onSelect={selectSuggestion}
                      />
                  </View>
                  <KeyboardSpacer/>
                </View>
            </Container>
        )
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.keyboardOpen != nextProps.keyboardOpen && nextProps.keyboardOpen === false) {
        dismissKeyboard();
      }
    }
}

function bindAction(dispatch) {
    return bindActionCreators(virtualTableActions, dispatch);
}

function mapStateToProps(state) {
  return {
    inputText: state.virtualTable.inputText,
    suggestions: state.virtualTable.suggestionsOpen && state.virtualTable.suggestions,
    keyboardOpen: state.virtualTable.suggestionsOpen,
    url: getVirtualTableUrl(state.virtualTable.selectedSuggestion),
  }
}

function getVirtualTableUrl(sug) {
  if(sug) {
    const id = sug.vtid;
    return `https://m.imhd.sk/ba/online-zastavkova-tabula?z=${id}&skin=2`;
  }
}

export default connect(mapStateToProps, bindAction)(Home);
