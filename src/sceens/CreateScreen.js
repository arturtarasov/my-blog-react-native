import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme';
import { addPost } from '../store/actions/post'

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [text, useText] = useState('')

  const img = "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg"
  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title} >Создай новый пост</Text>
          <TextInput 
            style={styles.textarea} 
            placeholder="Введите текст поста" 
            value={text}
            onChangeText={useText}
            multiline
          />
          <Image
            style={{
              width: '100%',
              height: 200,
              marginBottom: 10
            }}
            source={{
              uri: img
            }}
          />
          <Button title="Создать пост" color={THEME.MAIN_COLOR} onPress={saveHandler}/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: "Создать пост",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});
