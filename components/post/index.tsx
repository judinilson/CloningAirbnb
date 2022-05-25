import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const Post = (props) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Bed & Bedrooms */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedrooms
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type} {post.title}
      </Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalprice}>${post.totalPrice}</Text>
    </View>
  );
};

export default Post;
