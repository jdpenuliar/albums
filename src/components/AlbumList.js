//import Component for extend without destructuring import
import React, { Component } from 'react';
// import { View } from 'react-native';
// for scrollable
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//classes do not require semi colon


class AlbumList extends Component {
     // Class Component - used for dynamic sources of data
     // Class Component - handles any data that might change (fetching data, user events, etc)
     // Class Component - More code to write.
     // Class Component - lifecycle method - functions that are
     // placed in a class that automatically will be called at
     // some point (trigger). Once called “component will mount

     ///////////////////////////////////////////////
     //          setting states from react        //
     ///////////////////////////////////////////////

     //class level property

     // step 1 initial state or empty state
     state = { albums: [] };

     //lifecycle methods

     componentWillMount() {
          // can pause the run time. chrome will enter
          // debugger mode.
          // debugger;
          console.log('haha header');

          //to request from api npm install axios. Import it
          // it has promise.
          // api has to be https.

          // React Native boots up
          // RN decides to render ‘app’ to the screen
          // App decides to render it self, Header and AlbumList
          // Album list hits lifecycle componentwillmount.
          // ajax call
          // app, albumlist, header appear on screen but with no data
          // time has passed but only then ajax response return json
          //
          // THIS WOULD BE SOLVE BY ‘component state’ by react


          // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          // .then(response => console.log(response));

          //step 2
          // this. setState is a function from Component to update components
          // for rerender
          axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ albums: response.data }));

          // Rules of State
          // Definition of state: a plain javascript object used
          //to record and respond to user-triggered events
          // When we need to update what a component shows, call ‘this.setState’
          // Only change state with ‘setState;, do not do ‘this.state’
          //
          // Prop - communication between parent to child communication
          // State - component internal record keeping. Update
          // data in a component. Only for class based components
     }
     //helper function to render albums
     renderAlbums() {
          //fat error function
          //map function is an array helper
          //it can be called after an array variable
          // ALWAYS PUT A KEY IN THE JSX!
          return this.state.albums.map(album =>
               <AlbumDetail key={album.title} albumProp={album} />
          );
     }
     render() {
          console.log(this.state);
          return (
               /*put reference here from the this.state.album in the view*/
               // <View>
               //      {this.renderAlbums()}
               // </View>

               //scrollable
               <ScrollView>
                    {this.renderAlbums()}
               </ScrollView>
          );
     }
}

export default AlbumList;
