import React from 'react';

import { InputGroup, Input, Icon, List, ListItem, Text, } from 'native-base';
import { View, TouchableHighlight, } from 'react-native';

const StopInput = (props) => {
  console.log("props", props);
  const suggestions = props.suggestions && (
    <List>
      {props.suggestions.map(s => (
        <ListItem key={s.id}>
          <TouchableHighlight onPress={() => props.onSelect(s)}>
            <View>
              <Text>{s.name}</Text>
            </View>
          </TouchableHighlight>
        </ListItem>))}
    </List>
  );
  return (
    <View>
      {suggestions}
      <InputGroup>
          <Icon name="ios-home" />
          <Input placeholder="Zadaj meno zastavky" autoCorrect={false} autoCapitalize="none" {...props}/>
      </InputGroup>
    </View>
  );
}

export default StopInput;
