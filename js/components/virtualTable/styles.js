
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 25,
    },
    heading: {
      textAlign: 'center',
    },
    body: {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
    },
    virtualTable: {
      flex: 1,
      marginTop: 5,
    },
});
