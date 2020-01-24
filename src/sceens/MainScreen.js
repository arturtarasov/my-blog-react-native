import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainScreen = ({ params }) => (
  <View>
    <Text style={styles.center}>MainScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
