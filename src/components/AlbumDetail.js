import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// When to decide when to use functional component and and class based component
//
// if component is just presentational use functional component

const AlbumDetail = ({ albumProp }) => {
     //error is style of code.
     //if componenet was passed a component it is responsible for render
     // <Image source={{ uri: thumbnail_image }} />
     //source should be a uri with link that spits out the image

     //destructure the style
     const { title, artist, thumbnail_image, image, url } = albumProp;
     const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle,
     headerTextStyle, imageStyle } = styles;

     return (
          <Card>
               <CardSection>
                    <View style={thumbnailContainerStyle}>
                         <Image
                              style={thumbnailStyle}
                              source={{ uri: thumbnail_image }}
                         />
                    </View>
                    <View style={headerContentStyle}>
                         <Text style={headerTextStyle}>{title}</Text>
                         <Text>{artist}</Text>
                    </View>

               </CardSection>

               <CardSection>
                    <Image
                         style={imageStyle}
                         source={{ uri: image }}
                    />
               </CardSection>

               <CardSection>
                    <Button onPressProp={() => Linking.openURL(url)}>
                         Buy Now!
                    </Button>
               </CardSection>

          </Card>
     );
};

// will fill the image width with screen
// flex: 1,
// width: null

const styles = {
     headerContentStyle: {
          justifyContent: 'space-around',
          flexDirection: 'column',
     },
     headerTextStyle: {
          fontSize: 18
     },
     thumbnailStyle: {
          height: 50,
          width: 50
     },
     thumbnailContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 10
     },
     imageStyle: {
          height: 300,
          flex: 1,
          width: null
     }
};

export default AlbumDetail;
