import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import Theme from "../Theme";

function ArticleCard({navigation}){
    return(
    <TouchableOpacity style={styles.container}>

      <View style={{width:'23%'}}>
      <Image source={Theme.article} style={styles.img}/>
      </View>

       <View style={{paddingLeft:10,width:'64%',justifyContent:'space-evenly'}}>
        <Text style={styles.title}>Title of the article</Text>
        <View style={styles.line} />
        <Text numberOfLines={2} style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing 
        and the type setting industry.</Text>
       </View>

       <View style={styles.corner}>
       <Image source={Theme.triangle} style={styles.triangle}/>
       <Text style={styles.number}>169</Text>
       </View>
    </TouchableOpacity>
    )}
export default ArticleCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    marginTop: 25,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
  },
  img: {
    height: 80,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
  },
  desc: {
    fontWeight: "500",
    fontSize: 13,
    color: "#fff",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#2F2F2F",
    opacity: 0.6,
    marginVertical: 5,
  },
  triangle: {
    height: 12,
    width: 12,
    resizeMode: "contain",
  },
  number: {
    color: "#FFF",
    fontSize: 12,
  },
  corner: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#2F2F2F",
    marginLeft:10
  },
});