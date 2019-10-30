import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
export default class TabNavigatorTwo extends Component {
  state = {
    selectedTab: 'home',
  };
  _renderContent = (color: String, pageText: String) => {
    return (
      <View
        style={[
          styles.tabContent,
          {
            backgroundColor: color,
          },
        ]}>
        <Text style={styles.tabText}> {pageText} </Text>
      </View>
    );
  };
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          selectedTitleStyle={styles.tabText}
          renderIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_unhome.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_home.png')}
            />
          )}
          // badgeText="1"
          onPress={() =>
            this.setState({
              selectedTab: 'home',
            })
          }>
          {this._renderContent('#ffff', '首页 Tab - 1')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="发现"
          selectedTitleStyle={styles.tabText}
          renderIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_unfind.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_find.png')}
            />
          )}
          // badgeText="1"
          onPress={() =>
            this.setState({
              selectedTab: 'find',
            })
          }>
          {this._renderContent('#ffff', '发现 Tab - 2')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'open'}
          title="开门"
          selectedTitleStyle={styles.tabText}
          renderIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_unopen.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_open.png')}
            />
          )}
          // badgeText="1"
          onPress={() =>
            this.setState({
              selectedTab: 'open',
            })
          }>
          {this._renderContent('#ffff', '开门 Tab - 3')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'fresh'}
          title="生鲜"
          selectedTitleStyle={styles.tabText}
          renderIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_unfresn.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_fresh.png')}
            />
          )}
          onPress={() =>
            this.setState({
              selectedTab: 'fresh',
            })
          }>
          {this._renderContent('#ffff', '生鲜 Tab - 4')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'my'}
          title="我的"
          selectedTitleStyle={styles.tabText}
          renderIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_unmy.png')}
            />
          )}
          renderSelectedIcon={() => (
            <Image
              style={styles.tabImage}
              source={require('../image/icon_my.png')}
            />
          )}
          // badgeText="1"
          onPress={() =>
            this.setState({
              selectedTab: 'my',
            })
          }>
          {this._renderContent('#ffff', '我的 Tab - 5')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: '#000',
  },
  tabImage: {
    width: 25,
    height: 25,
  },
});
