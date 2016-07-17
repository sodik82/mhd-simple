
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Content, View, Text, } from 'native-base';
import { TextInput } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import * as virtualTableActions from '../../actions/virtualTable';

import StopInput from '../StopInput';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        const { inputBlur, inputSet, inputFocus, inputText } = this.props;
        //FIXME StopInput keeps dismissing keyboard while classic RN TextInput don't (as expected)
        return (
            <Container theme={theme} style={{backgroundColor: '#565051'}}>
                <Content>
                    <Grid style={{marginTop: 20}}>
                        <Row>
                            <View style={styles.row}>
                                <Text>
                                    MHD simple
                                </Text>
                            </View>
                        </Row>
                        <Row>
                          <StopInput
                            onBlur={inputBlur}
                            onChangeText={inputSet}
                            onFocus={inputFocus}
                            value={inputText}
                            />
                        </Row>
                        <Row>
                          <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 400}}
                            onBlur={inputBlur}
                            onChangeText={inputSet}
                            onFocus={inputFocus}
                            value={inputText}
                            />
                        </Row>
                    </Grid>
                </Content>
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
  }
}

export default connect(mapStateToProps, bindAction)(Home);
