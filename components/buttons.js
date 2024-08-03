import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button ({label}) {

}

const styles = StyleSheet.create({
    buttonContainer:{
        width:320, 
        height:68,
        marginHorizontal:20,
        alignItems:'center',
        padding:3
    },
    Button:{
        borderRadius:10,
        width:'100%',
        height:'100%',
        alignItems:'center',
        flexDirection:'row',
    },
    buttonIcon:{
        paddingRight:8,
    },
    buttonLabel:{
        color:'#fff',
        fontSize:16,
    }
})