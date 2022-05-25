import { Pressable, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import styles from "./styles";

const GuestScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <SafeAreaView style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        {/* Row 1:Adult */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>

          {/* Buttons with values */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 16, marginHorizontal: 20 }}>
              {" "}
              {adults}{" "}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
          </View>

          {/* Buttons with values */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(0, children - 1))}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 16, marginHorizontal: 20 }}>
              {" "}
              {children}{" "}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* Row 1:Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>

          {/* Buttons with values */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(Math.max(0, infants - 1))}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 16, marginHorizontal: 20 }}>
              {" "}
              {infants}{" "}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setInfants(infants + 1)}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("SearchResults")}
          style={{
            marginBottom: 20,
            backgroundColor: "#f15454",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Search
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default GuestScreen;
