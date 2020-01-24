import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BookmarkedScreen = ({ params }) => (
  <View>
    <Text style={styles.center}>BookmarkedScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
