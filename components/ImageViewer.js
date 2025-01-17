import { Image, StyleSheet } from "react-native";

export default function ImageViwer({placeholderImageSource}) {
    return (
        <Image source={placeholderImageSource} style={styles.image}></Image>
    );

}

const styles = StyleSheet.create({
    image:{
        width:320,
        height:440, 
        borderRadius:18,
    },
})