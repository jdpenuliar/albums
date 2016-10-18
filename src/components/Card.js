import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
     return (
          // {props.children}
          //this will render any components passed in the parent component
          <View style={styles.containerStyle}>

               {props.children}
          </View>
     );
};

const styles = {
     containerStyle: {
          borderWidth: 1,
          borderRadius: 2,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          marginTop: 10
     }
};
export default Card;
