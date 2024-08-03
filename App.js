import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViwer from './components/ImageViewer';
import Button from './components/buttons';

const placeholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={styles.imageContainer}>
        <ImageViwer placeholderImageSource={placeholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label='Escolha a foto'/>
        <Button label='Use a foto'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer:{
    flex:1/3,
    alignItems:'center',
  },  
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop:58,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius:18,
  }
});
