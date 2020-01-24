import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CreateScreen = ({ params }) => (
  <View>
    <Text style={styles.center}>CreateScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
