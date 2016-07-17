import React from 'react';

import { InputGroup, Input, Icon } from 'native-base';

const StopInput = (props) => {
  console.log("props", props);
  return (
    <InputGroup borderType="underline" >
        <Icon name="ios-home" />
        <Input placeholder="Zadaj meno zastavky" autoCorrect={false} autoCapitalize="none" {...props}/>
    </InputGroup>
  );
}

export default StopInput;
