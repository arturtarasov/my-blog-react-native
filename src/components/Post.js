import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <View style={styles.textWrap}>
          <View style={styles.textWrap_title}>
            <Text style={styles.title}>{post.title}</Text>
          </View>
          <View style={styles.textWrap_date}>
            <Text style={styles.date}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.imgWrap}></View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 17,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  imgWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%"
  },
  textWrap: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    color: "#000",
    marginBottom: 6
  },
  title: {
    fontSize: 20
  }
});
