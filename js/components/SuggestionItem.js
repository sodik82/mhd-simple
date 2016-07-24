import React from 'react';

import { Text, } from 'native-base';
import { View, StyleSheet } from 'react-native';

function SuggestionItem (props) {
  const s = props.suggestion;
  return (
    <View>
      <Text>{s.name}</Text>
      <Text style={styles.details}>{`S:${s.score} D: ${s.distance} H: ${s.hits}`}</Text>
    </View>
  );
}

export default SuggestionItem;

const styles = StyleSheet.create({
    details: {
      textAlign: 'right',
    }
});
