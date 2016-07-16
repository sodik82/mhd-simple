
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Header, Title, Content, View, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
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
                    </Grid>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
