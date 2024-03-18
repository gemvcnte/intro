import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import Sample from "../../assets/icon.png";

export default function ContentCard() {
  return (
    <View className="w-screen flex-row">
      <Image
        className="w-[55px] h-[55px] rounded-full px-[20px]"
        source={{
          uri: "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",
        }}
      />
      <View></View>
      <View name="authorContainer">
        <Text className="text-[16px] pl-4">Author Name</Text>
        <Text className="text-[12px] px-4 ">Description</Text>
      </View>
    </View>
  );
}
