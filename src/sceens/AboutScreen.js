import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AboutScreen = ({ params }) => (
  <View>
    <Text style={styles.center}>AboutScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
