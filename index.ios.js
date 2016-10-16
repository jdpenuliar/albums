// index.ios.js - place code here for iOS.

// import a library to help create Component
// create a component
// render it to the device

///////////////////////////////////////////////
// import a library to help create Component //
///////////////////////////////////////////////

// do not worry if eslint is giving an error.
// this occurs when you import a variable and it is not in use
// react library contains code to know how a component should behave
// react library knows how to take a bunch of components and make them work together

// react native knows how tot take the output from a compoenent and place it on the screen
// provides default core compoenents (text, images)

// import statements are part of es6 (a new version of js)
// only by importing libraries can give access to a file
import React from 'react';
// import ReactNative from "react-native";
// IMPORT DESTRUCTURING for the above import
import { Text, AppRegistry } from 'react-native';

// react library contains code to know how a component should behave
// react library knows how to take a bunch of components and make them work together

// react native knows how tot take the output from a compoenent and place it on the screen
// provides default core compoenents (text, images)

// import statements are part of es6

///////////////////////////////////////////////
//             Create a compoenent           //
///////////////////////////////////////////////

// a component is an javascript function that produces something that
// can place on the screen of our mobile device. This is called jsx.
// this tags are a dialect of javascript called jsx
// jsx is used to write react compoenents and has
// the same structure as html
// jsx is like a mask for function calls like for react.createelement.
// jsx makes our life easier

// eslint just errors this because of code aesthetics
// const App = () => {
//      return (
//           <Text>
//                Some haha
//           </Text>
//      );
// };

const App = () => (
     <Text>
          Some haha
     </Text>
);


///////////////////////////////////////////////
//         Render it to the device           //
///////////////////////////////////////////////

//the first argument must match the name of the project
//the second argument must take in atleast one compoenent to render.
AppRegistry.registerComponent('albums', () => App);
