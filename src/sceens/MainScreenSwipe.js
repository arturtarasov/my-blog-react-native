import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import { AppHeaderIcon } from '../components/AppHeaderIcon';

const { width } = Dimensions.get("window");
const height = width * 0.8;

export const MainScreenSwiper = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadPosts());
  // }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);
  if (!allPosts.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>Постов пока нет</Text>
      </View>
    );
  }

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {allPosts.map(post => (
          <View style={styles.container}>
            <View style={styles.textWrap}>
              <View style={styles.textWrap_title}>
                <Text style={styles.title}>{post.title}</Text>
              </View>
              <View style={styles.textWrap_date}>
                <Text style={styles.date}>
                  {new Date(post.date).toLocaleTimeString() +
                    ", " +
                    new Date(post.date).toLocaleDateString()}
                </Text>
              </View>
            </View>
            <Image
              key={post.id.toString()}
              style={styles.image}
              source={{ uri: post.img }}
            />
            <View style={styles.text}>
              <Text>{post.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

MainScreenSwiper.navigationOptions = ({ navigation }) => ({
  headerTitle: "Список постов",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  image: {
    width,
    height
  },
  text: {
    width,
    padding: 10
  },
  textWrap: {
    width,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    color: "#000",
    marginBottom: 6
  },
  title: {
    fontSize: 20
  }
});
