import React, { useRef, useState } from 'react';
import { Button, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PhotoPicker } from '../components/PhotoPicker';
import { addPost } from '../store/actions/post';
import { THEME } from '../theme';

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, useText] = useState("");
  const [title, useTitle] = useState("");
  const imageRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      title,
      text,
      img: imageRef.current,
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  const photoPickHandler = uri => {
    imageRef.current = uri;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.titleText}
            placeholder="Введите название поста"
            value={title}
            onChangeText={useTitle}
            maxLength={40}
          />
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст поста"
            value={text}
            onChangeText={useText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!title}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",
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
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10
  },
  titleText: {
    padding: 10,
    marginBottom: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});
