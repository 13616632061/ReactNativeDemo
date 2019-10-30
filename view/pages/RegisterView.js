import React, {Component} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const backgraound = require('../image/icon_bg.jpeg');
const back = require('../image/icon_back.png');
const user = require('../image/icon_user.png');
const email = require('../image/icon_email.png');
const pwd = require('../image/icon_pwd.png');

export default class RegisterView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgraound}
          style={[styles.container, styles.bg]}
          resizeMode="stretch">
          <View style={styles.headerContainer}>
            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image source={back} style={styles.headerBackButtonIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerTitleView}>
              <Text style={styles.headerTitleText}>注册</Text>
            </View>
          </View>

          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Image
                  source={user}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whileFont]}
                placeholder="用户名"
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Image
                  source={email}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whileFont]}
                placeholder="邮箱"
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Image
                  source={pwd}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whileFont]}
                placeholder="密码"
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={this.register.bind(this)}>
              <View style={styles.singUp}>
                <Text style={styles.whileFont}>注 册</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.singIn}>
                <Text style={styles.whileFont}>
                  已有账号？
                  <Text style={styles.blueFont}>登录</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
  register() {
    console.log('注册');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 15,
    width: null,
    height: null,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconView: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  headerBackButtonIcon: {
    width: 25,
    height: 25,
  },
  headerTitleView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35,
  },
  headerTitleText: {
    fontSize: 25,
    color: '#fff',
  },
  inputsContainer: {
    flex: 3,
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
  inputContainer: {
    height: 75,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#fff',
  },
  inputIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  whileFont: {
    color: '#fff',
  },
  footerContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  singUp: {
    backgroundColor: '#ff3366',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  blueFont: {
    color: 'blue',
  },
  singIn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
});
