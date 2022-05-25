import { FlatList, Text, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import Post from "../../components/post";
import feed from "../../assets/data/feed";

const SearchResultScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
      </View>
    </SafeAreaView>
  );
};

export default SearchResultScreen;
