import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import Theme from "../Theme";
import RoundedButton from "./RoundedButton";

function WhyHere(){
    return(
    <View style={styles.container}>

       <View style={{width:'40%'}}>
       <Text style={styles.tabTitle}>Why am i Here?</Text>
       </View>


       <View style={styles.wrapper}>
       <RoundedButton label={'Marketing'} />
       <RoundedButton label={'Finance'} />
       <RoundedButton label={'Sales & Marketing'} />
       </View>


    </View>
    )}
export default WhyHere;

const styles = StyleSheet.create({
    container: {
       padding:20,
       flexDirection:'row'
    },
    tabTitle:{
        fontWeight:'bold',
        fontSize:16,
        color:'#8AB9FF'
    },
    wrapper:{
        width:'60%',
        flexDirection:'row',
        flexWrap:'wrap'
    }
});