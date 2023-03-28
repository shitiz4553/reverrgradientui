import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Image
} from "react-native";
import Theme from "../Theme";

const windowWidth = Dimensions.get('window').width
import { LinearGradient } from 'expo-linear-gradient';

function NewsCard({image,ago,news,}){
    return(
    <TouchableOpacity style={styles.container}>
     <TouchableOpacity style={styles.dots} hitSlop={{left:15,right:15,top:15,bottom:15}}>
    <Image source={Theme.threedots} style={{height:13,width:13,resizeMode:'contain'}} />
    </TouchableOpacity>
     <ImageBackground style={styles.img} source={image}>
     <LinearGradient colors={[ 'rgba(5,5,5,0.1)', 'rgba(5,5,5,0.5)']} 
     style={styles.textwrapper}>
     <Text numberOfLines={2} style={styles.newstitle}>
      {news}
    </Text>
    <Text numberOfLines={1} style={styles.ago}>
      {ago}
    </Text>
     </LinearGradient>
     </ImageBackground>
    </TouchableOpacity>
    )}
export default NewsCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1C1C1C',
        minWidth:190,
        borderRadius:15,
        overflow:'hidden',
        marginRight:20
    },
    img:{
        width:'100%',
        height:160
    },
    textwrapper:{
        height:'100%',
        position:'absolute',
        width:'100%',
        bottom:0,
        paddingLeft:15,
        justifyContent:'flex-end',
        paddingBottom:10,
        paddingRight:10
    },
    newstitle:{
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold'
    },
    ago:{
        fontSize:12,
        color:'#FFF',
        opacity:0.6,
        marginTop:5
    },
    dots:{
        top:15,
        position:'absolute',
        right:10,
        zIndex:1
    }
});