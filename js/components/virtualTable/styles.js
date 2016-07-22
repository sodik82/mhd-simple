
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    row: {
      flex: 1,
      alignItems: 'stretch'
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 15,
        alignItems: 'center'
    },
    main: {
      flexDirection: 'column',
      flex: 1,
      paddingTop: 25,
    }
});