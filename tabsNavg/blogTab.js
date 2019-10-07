import React, {Component} from 'react';
import {View, StyleSheet, Image, ActivityIndicator, Linking} from 'react-native';
import {createDrawerNavigator,
        createAppContainer,
        createStackNavigator} from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Title, Body, Subtitle, Left, Right, Item} from 'native-base';
import BlogSingleTab from './blogSingle.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

class BlogTab extends Component {/*
  static navigationOptions = {

    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    header: {
      visible: false,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };*/

  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  async componentDidMount(){
    try {
      const response = await fetch('https://api.myjson.com/bins/uiamd');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.posts,
      }, function () {
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  render(){

    if (this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (

      <Container>
        <Content>

          {this.dispData()}

       <Card>
            <CardItem button onPress= {()=> this.props.navigation.navigate('SingleSwitch')}>
            <Image source={require('../goldbloom.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem button onPress= {()=> alert('hi')} style={{textAlign:'justify'}}>
            <Body>
              <Title style= {{fontSize:25, fontWeight: 'normal', textAlign: 'justify', }}>{this.state.dataSource.title}</Title>
              <Subtitle style= {{fontSize:15, color: 'green', fontStyle: 'italic'}}>Subtitle</Subtitle>
            </Body>
            </CardItem>
         </Card>
         

        </Content>
      </Container>
        )
      }

      dispData(){
        return this.state.dataSource.map((elementObject) => {
          return (

              <Card key={elementObject.id}>
                  <CardItem
                    button onPress= {()=> this.props.navigation.navigate('SingleSwitch', {
                      title: elementObject.title,
                      subtitle: elementObject.biliner,
                      body: elementObject.body,
                      image: elementObject.image,
                      author: elementObject.author,
                    }
                  )}>
                  <Image source={{uri: elementObject.image}} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem button onPress= {()=> {Linking.openURL('https://google.com')}} style={{textAlign:'justify'}}>
                  <Body>
                    <Text style= {{fontSize:25, fontWeight: 'normal', textAlign: 'justify', }}>{elementObject.title}</Text>
                    <Text note style= {{fontSize:15, color: 'green', fontStyle: 'italic'}}>{elementObject.biliner}</Text>
                  </Body>
                  </CardItem>
               </Card>
          )
        }
      

        );
      }
    }

/*
    const RootStack = createStackNavigator(
      {
        Common: BlogTab,
        Indv: BlogSingleTab,
      },
      {
        initialRouteName: 'Common',
      },
    )*/

    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        fontSize: 20,
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


export default BlogTab;
