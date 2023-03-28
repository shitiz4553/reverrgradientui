import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
} from "react-native";
import BusinessCard from "../components/BusinessCard";

import GradientHeader from "../components/GradientHeader";
import { businessCard } from "../sampledata";
import Theme from "../Theme";


function Business({navigation}){

  
return (
  <View style={styles.container}>
    <GradientHeader />

    <ScrollView>
      <View style={{ padding: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Theme.arrowleft}
              style={{
                height: 25,
                width: 25,
                resizeMode: "contain",
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Business</Text>
        </View>

        {businessCard.map((item) => {
          return (
            <BusinessCard
              key={item.id}
              userimage={item.userimage}
              industryname={item.industryname}
              duration={item.duration}
              name={item.name}
              reviews={item.reviews}
              rating={item.rating}
              feature1={item.feature1}
              feature2={item.feature2}
              designation={item.designation}
            />
          );
        })}

      </View>
    </ScrollView>
  </View>
);}
export default Business;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  title: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFF",
    fontWeight: "bold",
  },
  tabWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginBottom:3
  },
  activeStyle: {
    borderBottomWidth: 2,
    marginRight: 15,
  },
});