import {
  FlatList,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { Component, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import styles from "./styles";
import search from "../../assets/data/search";
import SuggestionRow from "./SuggestionRow";

const LocationSearchScreen = (props) => {
  const navigation = useNavigation();
  const [inputText, setIpuntText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("Guests", {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: "AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw",
          language: "en",
          types: "(cities)",
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />

      {/* List of destinations */}
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate("Guest")}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}> {item.description}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default LocationSearchScreen;
