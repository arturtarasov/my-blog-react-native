import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PostScreen = ({ params }) => (
  <View>
    <Text style={styles.center}>PostScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
