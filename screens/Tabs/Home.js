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
import PostCard from "../../components/PostCard";
import BlueButtonRounded from "../../components/BlueButtonRounded";
import NewsCard from "../../components/NewsCard";
import ArticleCard from "../../components/ArticleCard";
import { newsData } from "../../sampledata";



function Home(){
    return (
      <View style={{ flex: 1 }}>

        <GradientHeader />

        <View
          style={{
            flex: 1,
            backgroundColor: Theme.backgroundColor,
            paddingHorizontal: 25,
            paddingTop:25
          }}
        >


          <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>
            Hello, <Text style={{ color: Theme.primaryColor }}>John</Text>
          </Text>
       
          <TouchableOpacity
            style={{
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.subtitle}>Featured</Text>
            <Image
              source={Theme.dropdown}
              style={{ height: 8, width: 8, resizeMode: "contain" }}
            />
          </TouchableOpacity>


            <PostCard hasArt={false} />

            <PostCard hasArt={true} />

            <View style={styles.wrapper}>
              <Text style={[styles.title, { fontSize: 18, fontWeight: "bold" }]}>
                Trending News
              </Text>
              <BlueButtonRounded label={"Read More"} />
            </View>

     
           <FlatList
             showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={newsData}
              renderItem={({ item }) => (
                <NewsCard
                  image={item.image}
                  ago={item.ago}
                  news={item.news}
                  key={item.id}
                />
              )}
              keyExtractor={(item) => item.id}
            />
     

            <ArticleCard/>

          <View style={{height:50}} />

          </ScrollView>
        </View>
        <TouchableOpacity>
          <Image source={Theme.addbtn} style={styles.corner} />
        </TouchableOpacity>
      </View>
    );}
export default Home;

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        color:'#FFF',
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
    }
});