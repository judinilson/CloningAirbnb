import {
  Text,
  View,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/18/e4/d7/18e4d747b3d09ef137d8b1f7388d3d45.jpg",
        }}
        style={styles.image}
      >
        <View>
          {/* MARK: Search Bar */}
          <Pressable
            style={styles.searchButton}
            onPress={() => {
              navigation.navigate("Location");
            }}
          >
            <Feather name="search" size={25} color="#f15454" />
            <Text style={styles.searchbtnText}>Where are you going?</Text>
          </Pressable>

          {/* MARK: Title */}
          <Text style={styles.title}>Go Near</Text>
          {/* MARK: Button */}
          <Pressable
            style={styles.button}
            onPress={() => {
              console.warn("hey btn");
            }}
          >
            <Text style={styles.btnText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
