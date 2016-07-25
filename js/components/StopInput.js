import React from 'react';

import { InputGroup, Input, Icon, List, Button} from 'native-base';
import { View, TouchableHighlight, } from 'react-native';

import SuggestionItem from './SuggestionItem';

const StopInput = (props) => {
  console.log("props", props);
  // best suggestions are first => reverse list
  const suggestions = props.suggestions && (
    <List>
      {props.suggestions.reverse().map(s => (
        <View key={s.id}>
          <TouchableHighlight onPress={() => props.onSelect(s)}>
            <View>
              <SuggestionItem suggestion={s}/>
            </View>
          </TouchableHighlight>
        </View>))}
    </List>
  );
  const shouldReset = !!props.value;
  return (
    <View>
      {suggestions}
      <InputGroup >
          <Icon name="ios-home" />
          <Input placeholder="Zadaj meno zastavky" autoCorrect={false} autoCapitalize="none" {...props}/>
          {shouldReset &&
            <Button transparent small onPress={props.onReset}>
              <Icon name="ios-close" />
            </Button>
          }
      </InputGroup>
    </View>
  );
}

export default StopInput;
