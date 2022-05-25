import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import SearchResultsMap from "../screens/SearchResultsMap";
import { useRoute } from "@react-navigation/native";
import SearchResultScreen from "../screens/searchResultsScreen";
import SearchResultsMaps from "../screens/ SearchResultsMap";
//import { API, graphqlOperation } from "aws-amplify";
//import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: { backgroundColor: "#f15454" },
      }}
    >
      <Tab.Screen name="List" component={SearchResultScreen} />
      <Tab.Screen name="Map" component={SearchResultsMaps} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
