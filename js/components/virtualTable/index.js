
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'native-base';
import { View, WebView } from 'react-native';
const dismissKeyboard = require('dismissKeyboard');

import * as virtualTableActions from '../../actions/virtualTable';
import { getSuggestions } from '../../data/suggestions';

import StopInput from '../StopInput';
import KeyboardSpacer from '../KeyboardSpacer';

import styles from './styles';

class VirtualTable extends Component {

    render() {
        const { inputBlur, inputSet, inputFocus, inputText, suggestions, selectSuggestion, url } = this.props;
        return (
          <View style={styles.main}>
            <View style={[styles.row, {flex:1, flexDirection: 'column'}]}>
                <View>
                  <Text>
                      MHD simple
                  </Text>
                </View>
                {url && (
                  <WebView
                    source={{uri: url}}
                    style={{marginTop: 5, flex: 1, }}
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
                onReset={() => inputSet('')}
                autoFocus={true}
                />
            </View>
            <KeyboardSpacer/>
          </View>
        )
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.keyboardOpen != nextProps.keyboardOpen) {
        if (nextProps.keyboardOpen === false) {
          dismissKeyboard();
        }
      }
    }
}

function bindAction(dispatch) {
    return bindActionCreators(virtualTableActions, dispatch);
}

function mapStateToProps(state) {
  const vt = state.virtualTable;
  const suggestionsOpen = vt.keyboardOpen || !vt.selectedStop;
  return {
    inputText: vt.inputText,
    // TODO perf - "mnemonize getSuggestions"
    suggestions: suggestionsOpen && getSuggestions({ query : vt.inputText, near: state.app.geoPosition}),
    keyboardOpen: vt.keyboardOpen,
    url: getVirtualTableUrl(vt.selectedStop),
  }
}

function getVirtualTableUrl(sug) {
  if(sug) {
    const id = sug.vtid;
    return `https://m.imhd.sk/ba/online-zastavkova-tabula?z=${id}&skin=2`;
  }
}

export default connect(mapStateToProps, bindAction)(VirtualTable);
