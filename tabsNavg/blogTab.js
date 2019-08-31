import React, {Component} from 'react';
import {View, StyleSheet, Image, ActivityIndicator, Linking} from 'react-native';
import {createDrawerNavigator,
        createAppContainer,
        createStackNavigator} from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';
import BlogSingleTab from './blogSingle.js'
import Ionicons from 'react-native-vector-icons/Ionicons';

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

  componentDidMount(){
    return fetch('http://insider.dtutimes.me/api/v1/blog')
      .then ((response)=> response.json())
      .then ((responseJson)=> {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        },
        function(){

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){

    if (this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
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

              <Card key={elementObject.uuid}>
                  <CardItem
                    button onPress= {()=> this.props.navigation.navigate('SingleSwitch', {
                      title: elementObject.title,
                      subtitle: elementObject.biliner,
                      body: elementObject.body,
                      image: elementObject.image,
                      author: elementObject.user.name,
                    }
                  )}>
                  <Image source={{uri: elementObject.image}} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem button onPress= {()=> {Linking.openURL('https://google.com')}} style={{textAlign:'justify'}}>
                  <Body>
                    <Title style= {{fontSize:25, fontWeight: 'normal', textAlign: 'justify', }}>{elementObject.title}</Title>
                    <Subtitle style= {{fontSize:15, color: 'green', fontStyle: 'italic'}}>{elementObject.biliner}</Subtitle>
                  </Body>
                  </CardItem>
               </Card>
          )
        }
        )
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
