import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Theme from "../../Theme";
import BulletSubPoint from "../BulletSubPoint";

function AboutCard() {
  return (
    <LinearGradient colors={["#030F2D", "#0B2661"]} style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.desc}>
        I am a marketing research professional , with 7+ years of experience.
        commercial and profitmaking venture will get the best research reports
        of the market in all sectors like automotive, electronics,
        pharmaceuticals and healthcare, food and beverages etc.
      </Text>

      <Text style={[styles.title,{marginTop:25}]}>Current Designation</Text>
      <Text style={styles.rate}>Enterprenuer</Text>

      <Text style={[styles.title,{marginTop:25}]}>Experience</Text>
      <BulletSubPoint title={'Enterpreneur'} titletwo="2007-Present" />
      <BulletSubPoint title={'Software Engineer'} titletwo="2007-2012" />


      <Text style={[styles.title,{marginTop:25}]}>Current Designation</Text>
      <BulletSubPoint title={'IIM Bangalore'} titletwo="2007-2012" />
      <BulletSubPoint title={'Software Engineer college of law'} titletwo="2007-2012" />


      <Text style={[styles.title,{marginTop:25}]}>Contact</Text>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
      <TouchableOpacity>
      <Image source={Theme.li} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Theme.phonestroke} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Theme.mail} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Theme.twitterstroke} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={Theme.ig} style={styles.icon} />
      </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}
export default AboutCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 15,
    marginTop: 15,
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.primaryColor,
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    paddingTop: 2,
  },
  rate: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    paddingTop: 5,
  },
  icon:{
    height:15,
    width:15,
    resizeMode:'contain',
    marginRight:15
  }
});
