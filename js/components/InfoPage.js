
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, } from 'native-base';
import { View, StyleSheet, } from 'react-native';

class InfoPage extends Component {

  render() {
    const { geo } = this.props;
    return (
      <View style={styles.main}>
        <Text style={styles.heading}>
            {'{MHD simple}'}
        </Text>
        <Text>{"Vaša pozícia: " + (geo ? "známa" : "neznáma")}</Text>
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    geo: state.app.geoPosition,
  }
}

export default connect(mapStateToProps)(InfoPage);

const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 25,
    },
    heading: {
      textAlign: 'center',
    },

});
