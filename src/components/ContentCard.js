import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import Sample from "../../assets/icon.png";

export default function ContentCard() {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",
        }}
        style={{
          width: 55,
          height: 55,
          borderRadius: 100,
          paddingHorizontal: 20,
        }}
      />
      <View></View>
      <View name="authorContainer">
        <Text style={styles.userName}>Author Name</Text>
        <Text style={{ fontSize: 12, paddingHorizontal: 16 }}>Description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    flexDirection: "row",
  },
  userName: {
    fontSize: 16,
    paddingLeft: 16,
  },
  description: {
    fontSize: 16,
  },

  //   flex: 1,
  //   width: 200,
  //   height: 200,
  //   resizeMode: "cover",
  //   borderRadius: 10,
  // },
});
