import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import Theme from "../Theme";
import Stars from "./Stars";
import BulletPoint from "./BulletPoint";
import ButtonStroke from "./ButtonStroke";
import { useNavigation } from '@react-navigation/native';


function BusinessCard({name,reviews,rating,designation,duration,industryname,feature1,feature2,userimage}){

    const navigation = useNavigation();

    return(
    <LinearGradient colors={['#030F2D', '#0A255F']} style={styles.container}>
      <View style={styles.halfWrapper}>
        <Image source={userimage} style={{width:75,height:75,borderRadius:100}} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{designation}</Text>

        <View style={{alignItems:'center',marginTop:10}}>
            <Stars rating={rating} />
            <Text style={{color:Theme.primaryColor,fontSize:10,marginTop:5}}>{reviews} Reviews</Text>
        </View>
      </View>
      <View style={styles.halfWrapper2}>
      <Text style={styles.title}>{industryname}</Text>
      <View style={{paddingVertical:10}}>
        <BulletPoint title={feature1} />
        <BulletPoint title={feature2} />
      </View>
      <Text style={[styles.subtitle,{marginBottom:15}]}>{duration}</Text>

      <ButtonStroke handlePress={()=>navigation.navigate('ScheduleSession')} haveicon={true} label={'Schedule Session'} />
      </View>
    </LinearGradient>
    )}
export default BusinessCard;

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        width:'100%',
        borderRadius:15,
        paddingVertical:20,
        flexDirection:'row'
    },
    halfWrapper:{
        width:'50%',
        paddingHorizontal:20,
        alignItems:'center'
    },
    halfWrapper2:{
        width:'50%',
        paddingHorizontal:20,
        justifyContent:'space-evenly'
    },
    title:{
        color:"#FFF",
        fontSize:17,
        fontWeight:'bold',
        marginTop:5
    },
    desc:{
        color:"#FFF",
        fontSize:13,
        fontWeight:'500',
        marginTop:5,
        opacity:0.5
    },
    subtitle:{
        color:"#FFF",
        fontSize:14,
        fontWeight:'500',
        marginTop:5
    },
});