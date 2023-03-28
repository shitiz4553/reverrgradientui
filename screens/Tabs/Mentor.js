import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import Theme from "../../Theme";
import GradientHeader from "../../components/GradientHeader";
import Searchbar from "../../components/Searchbar";
import MentorCard from "../../components/MentorCard";
import { featuredMentors } from "../../sampledata";
import CateogryCard from "../../components/CategoryCard";
import { useNavigation } from '@react-navigation/native';

function Mentor(){

  const navigation = useNavigation();

    return (
      <View style={{ flex: 1 }}>
        <GradientHeader />


        <ScrollView
          style={{
            flex: 1,
            backgroundColor: Theme.backgroundColor,
            paddingVertical: 25,
          }}
        >
          <View style={{paddingHorizontal:20}}>
          <Text style={styles.title}>Find the best mentor</Text>
          <View style={{flexDirection:'row',alignItems:'center',marginVertical:15}}>
            <View style={{width:'92%'}}>
            <Searchbar/>
            </View>
            <TouchableOpacity style={{width:'8%',justifyContent:'center',alignItems:'center',marginLeft:10}}>
            <Image source={Theme.filter} style={styles.filter}/>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title,{fontSize:16,marginBottom:15}]}>Featured Mentors</Text>

          </View>
        
           <FlatList
           style={{paddingLeft:20}}
             showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={featuredMentors}
              renderItem={({ item }) => <MentorCard key={item.id} image={item.userimage} name={item.username} desig={item.designation} />}
              keyExtractor={(item) => item.id}
            />

          <Text style={[styles.title,{fontSize:16,marginLeft:15,marginTop:25}]}>Choose a Category</Text>

          <View style={styles.chooseCatWrapper}>

          <CateogryCard handlePress={()=>navigation.navigate('Business')} title={'Business'} image={Theme.business} />
          <CateogryCard title={'Branding'} image={Theme.branding}/>
          <CateogryCard title={'Accounting'} image={Theme.accounting}/>
          <CateogryCard title={'Finance'} image={Theme.finance}/>
          <CateogryCard title={'Marketing'} image={Theme.marketing}/>
          <CateogryCard title={'Sales'} image={Theme.sales}/>

          </View>

          <View style={{height:55}}/>

        </ScrollView>
      </View>
    );}
export default Mentor;

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        color:'#FFF',
        marginTop:15,
        fontWeight:'bold'
    },
    subtitle:{
        color:'#FFF',
        marginRight:5,
        fontWeight:'bold'
    },
    corner:{
        height:80,
        width:80,
        resizeMode:'contain',
        borderRadius:100,
        position:'absolute',
        right:15,
        bottom:5
    },
    wrapper:{
        marginTop:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    filter:{
      height:15,
      width:15,
      resizeMode:'contain'
    },
    chooseCatWrapper:{
      paddingHorizontal:20,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between'
    }
});