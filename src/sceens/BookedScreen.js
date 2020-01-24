import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Post } from '../components/Post';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter(post => post.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

BookedScreen.navigationOptions = {
  headerTitle: "Избранное",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => console.log('press menu')}/>
    </HeaderButtons>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
