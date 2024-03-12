import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ContentCard from "../components/ContentCard";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <ContentCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
  },
});
