import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Theme from "../Theme";
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height

function GradientHeader(){
    const navigation = useNavigation();
    return(
        <LinearGradient colors={['#1B1D8B', Theme.backgroundColor]} style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Image source={Theme.user} style={styles.user} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
            <Image source={Theme.crown} style={styles.crown} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={Theme.logo} style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
            <Image source={Theme.bell} style={styles.bell} />
        </TouchableOpacity>


        <TouchableOpacity>
            <Image source={Theme.chat} style={styles.chat} />
        </TouchableOpacity>



        </LinearGradient>
    )}
export default GradientHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'flex-end',
        paddingTop:20,
        paddingHorizontal:25,
        justifyContent:'space-between',
        height:windowHeight / 7.3,
        paddingBottom:14
    },
    user:{
        height:42,
        width:42,
        borderRadius:100,
    },
    crown:{
        height:32,
        width:32,
    },
    logo:{
        height:40,
        width:70,
        resizeMode:'contain'
    },
    bell:{
        height:28,
        width:28,
        resizeMode:'contain'
    },
    chat:{
        height:28,
        width:28,
        resizeMode:'contain'
    }
});