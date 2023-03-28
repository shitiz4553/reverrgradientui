import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Theme from "../Theme";

function PostCard({hasArt}){
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.dots} hitSlop={{left:15,right:15,top:15,bottom:15}}>
            <Image source={Theme.threedots} style={{height:13,width:13,resizeMode:'contain'}} />
        </TouchableOpacity>
       <View style={styles.upperWrapper}>
        <Image source={Theme.user} style={{height:45,width:45,borderRadius:100}}/>
        <View style={{paddingLeft:15}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Text style={styles.title}>Emma Senkins</Text>
        <Text style={styles.hrs}>2 hrs ago</Text>
         </View>
            <Text style={styles.desig}>CEO @Fintech</Text>
        </View>
       </View>

        <View style={styles.line}/>

        <Text style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and the type setting industry. Lorem Ipsum has been the industry's standard dummy text ever . Lorem Ipsum has been the industry's standard dummy text ever .    
        </Text>



        {
        hasArt === true
        ?
        <Image source={Theme.art} style={styles.img} />
        :
        null
        }



        <View style={styles.line}/>
        <View style={styles.footerWrapper}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Theme.heart} style={{height:20,width:20,resizeMode:'contain'}}  />
            <Text style={{color:'#FFF',fontWeight:'600',fontSize:13,marginLeft:5}}>300</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Theme.chatsmall} style={{height:20,width:20,resizeMode:'contain'}}  />
            <Text style={{color:'#FFF',fontWeight:'600',fontSize:13,marginLeft:5}}>300</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Theme.share} style={{height:20,width:20,resizeMode:'contain'}}  />
            <Text style={{color:'#FFF',fontWeight:'600',fontSize:13,marginLeft:5}}>300</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={Theme.bookmark} style={{height:17,width:17,resizeMode:'contain'}}  />
            <Text style={{color:'#FFF',fontWeight:'600',fontSize:13,marginLeft:5}}>300</Text>
        </TouchableOpacity>
        </View>
    </View>
    )}
export default PostCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1C1C1C',
        borderRadius:10,
        padding:20,
        marginTop:20
    },
    upperWrapper:{
        flexDirection:'row',
    },
    title:{
        color:Theme.primaryColor,
        fontSize:16,
        fontWeight:'bold',
        
    },
    desig:{
        marginTop:3,
        color:Theme.textLightColor,
        fontSize:12
    },
    hrs:{
        marginTop:3,
        color:Theme.textLightColor,
        fontSize:10,
        marginLeft:10,
        opacity:0.5,
        marginBottom:2
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'#2F2F2F',
        opacity:0.6,
        marginVertical:10
    },
    desc:{
        color:'#FFF',
        fontWeight:'500',
        letterSpacing:0.15,
        textAlign:'justify',
        lineHeight:17
    },
    footerWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    img:{
        width:'100%',
        height:170,
        marginTop:15,
        borderRadius:10
    },
    dots:{
        top:25,
        position:'absolute',
        right:15
    }
});