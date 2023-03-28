import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

function CateogryCard({image,title,handlePress}){
    return(
    <TouchableOpacity onPress={handlePress} style={styles.container}>
       <View style={styles.imageWrapper}>
        <Image source={image} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
       </View>
       <LinearGradient colors={['#0A255F', '#061A46']} style={styles.infowrapper}>
        <Text style={styles.title}>{title}</Text>
       </LinearGradient>
    </TouchableOpacity>
    )}
export default CateogryCard;

const styles = StyleSheet.create({
    container: {
        height:150,
        width:'47%',
        borderRadius:10,
        overflow:'hidden',
        marginTop:25
    },
    imageWrapper:{
        height:'70%',
        width:'100%',
    },
    infowrapper:{
        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        color:'#FFF'
    },
    desig:{
        color:"#FFF",
        fontWeight:'500',
        opacity:0.6,
        fontSize:13,
        marginTop:1
    }
});