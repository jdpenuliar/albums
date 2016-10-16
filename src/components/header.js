// import libraries for making a componenet

// make a component

// make the compoenent available to other parts of the App
// because we dont want to display the component right away

///////////////////////////////////////////////
// import a library to help create Component //
///////////////////////////////////////////////

import React from 'react';
// import ReactNative from 'react-native';
import { Text } from 'react-native';

///////////////////////////////////////////////
//             Create a compoenent           //
///////////////////////////////////////////////

// rule of thumb making a component, it should be the same
// as the file name. And Capital on the first letter

// only the root compoenent uses AppRegistry
// for child components its just exports es6 method

const Header = () => (
     <Text>
          Albums!
     </Text>
);

///////////////////////////////////////////////
//       make the compoenent available       //
//        to other parts of the App          //
///////////////////////////////////////////////

export default Header;
