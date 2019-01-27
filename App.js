import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {  createBottomTabNavigator,
          createSwitchNavigator,
          createDrawerNavigator,
          createAppContainer,
          createStackNavigator,
        } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BlogTab from './tabsNavg/blogTab'
import FacebookTab from './tabsNavg/facebookTab'
import InstaTab from './tabsNavg/instaTab'
import NotifsTab from './tabsNavg/notifTab'
import ProfileScreen from './drawerNavg/profileScreen';
import EditionScreen from './drawerNavg/editionScreen';
import TeamScreen from './drawerNavg/teamScreen';
import ContactScreen from './drawerNavg/contactScreen';
import BlogSingleTab from  './tabsNavg/blogSingle'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

const getTabIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Blog') {
    iconName = 'ios-home';
  } else if (routeName === 'Facebook') {
    iconName = 'logo-facebook';
  } else if (routeName === 'Instagram') {
    iconName = 'logo-instagram';
  } else if (routeName === 'Notifications') {
    iconName = 'ios-notifications';
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const getTabName = (navigation) => {
  if ( navigation.state.routes[navigation.state.index] == undefined){
    return '';
  }
  else{
    const { routeName } = navigation.state.routes[navigation.state.index];
    return routeName;
  }
}

const TabNavg = createBottomTabNavigator(
  {
    Blog: { screen: BlogTab },
    Facebook: { screen: FacebookTab },
    Instagram: { screen: InstaTab },
    Notifications: { screen: NotifsTab },
  },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabIcon(navigation, focused, tintColor),
      }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      swipeEnabled: true,
      animationEnabled: true,
    },
  },
);

const StackTabNavg = createStackNavigator(
  {
    AppSwitch: {
      screen: TabNavg,
      navigationOptions: ({navigation}) => ({
        headerLeft: <Ionicons
                      style= {{ paddingLeft: 10 }}
                      onPress= {() => navigation.openDrawer()}
                      name={'md-menu'}
                      size={25}
                      color={'black'} />,
        headerTitle: getTabName(navigation),
      }),
    },
    SingleSwitch: {
      screen: BlogSingleTab,
    },
  },
);

const DrawerNavg = createDrawerNavigator(
  {
    Home: {
      screen: StackTabNavg,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Edition: {
      screen: EditionScreen,
    },
    Team: {
      screen: TeamScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
  },
);
/*
*/
/*
const MainStackNavg = createStackNavigator(
  {
    TotalApp: { screen: DrawerNavg },
    SingleSwitch: { screen: BlogSingleTab },
  },
);

const TotalStackNavg = createStackNavigator(
  {
    Drawer: DrawerNavg,
    Blogs: RootStack,
  },
);*/

const AppNavg = createAppContainer(DrawerNavg);

class App extends Component {
  /*
  static navigationOptions = ({ navigation }) => {
    if ( navigation.state.routes[navigation.state.index] == undefined){
      title: '';
    }
    else{
      const { routeName } = navigation.state.routes[navigation.state.index];
      title: routeName;
    }
  }*/
  render() {
    return <AppNavg />;
  }
}

export default App;
/*

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}*/

  /*tabBarIcon: ({ focused, tintColor }) =>
    getTabIcon(navigation, focused, tintColor);
tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
  };
  getTabIcon(navigation, focused, 'green')
  tabBarOptions: {
    activeTintColor: 'green';
    inactiveTintColor: 'gray';
  };
  swipeEnabled: true;
  animationEnabled: true;*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
