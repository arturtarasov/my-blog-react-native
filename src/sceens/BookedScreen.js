import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BookedScreen = ({ params }) => (
  <View style={styles.center}>
    <Text>BookmarkedScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
