import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Theme from "../Theme";

function ProfileCard(){
    return(

    <LinearGradient colors={[ '#022538','#061B41',]} style={styles.container}>
      <Image source={Theme.chinauser} style={styles.user} />
      <View style={styles.textwrapper}>
        <Text style={styles.name}>Wiliam vetros</Text>
        <Text style={styles.desig}>Market Research</Text>
        <Text style={styles.desc}>Lorem ipsim is a dummy text for ypesettings and texting.</Text>
      </View>
    </LinearGradient>

    )}
export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        width:'85%',
        borderWidth:1.5,
        borderColor:Theme.primaryColor,
        borderRadius:15,
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row'
    },
    user:{
        height: 80,
        width: 80,
        borderRadius:10,
    },
    textwrapper:{
        paddingHorizontal:15,
        width:'90%'
    },
    name:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    desig:{
        fontSize:14,
        color: Theme.primaryColor,
        paddingVertical:3,
        fontWeight:'600'
    },
    desc:{
        fontSize:12,
        color:'#939292',
        paddingRight:25,
        lineHeight:18
    }
});