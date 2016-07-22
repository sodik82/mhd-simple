
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, } from 'native-base';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

class InfoPage extends Component {

  render() {
    const { geo } = this.props;
    return (
      <View style={styles.main}>
        <TouchableHighlight onPress={() => console.log("haha")}><View>
          <Text>{"GEO:" + JSON.stringify(geo)}</Text>
        </View></TouchableHighlight>
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
      flexDirection: 'column',
      flex: 1,
      paddingTop: 25,
    }
});
