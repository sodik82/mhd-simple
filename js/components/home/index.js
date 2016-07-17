
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Text, } from 'native-base';
import { View } from 'react-native';
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
        const { inputBlur, inputSet, inputFocus, inputText, suggestions } = this.props;
        //FIXME StopInput keeps dismissing keyboard while classic RN TextInput don't (as expected)
        return (
            <Container theme={theme} style={{backgroundColor: '#565051'}}>
                <View style={styles.main}>
                  <View style={[styles.row, {flex:1}]}>
                      <Text>
                          MHD simple
                      </Text>
                  </View>
                  <View>
                    <StopInput
                      onBlur={inputBlur}
                      onChangeText={inputSet}
                      onFocus={inputFocus}
                      value={inputText}
                      suggestions={suggestions}
                      />
                  </View>
                  <KeyboardSpacer/>
                </View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return bindActionCreators(virtualTableActions, dispatch);
}

function mapStateToProps(state) {
  return {
    inputText: state.virtualTable.inputText,
    suggestions: state.virtualTable.suggestionsOpen && state.virtualTable.suggestions,
  }
}

export default connect(mapStateToProps, bindAction)(Home);
