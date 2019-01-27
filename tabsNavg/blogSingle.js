import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';


class BlogSingleTab extends Component {
  render(){

    const { navigation } = this.props;
    const regex = /[</p>]/ig;

    return (
      <Container>
        <Content>
          <Card>

          <Body>
            <CardItem header>
              <Title style={{fontSize:30}}>{navigation.getParam('title', 'No Title')}</Title>
            </CardItem>
          </Body>
            <CardItem>
              <Subtitle style= {{fontSize:15, color: 'green', fontStyle: 'italic'}}>{navigation.getParam('subtitle', 'No Subtitle')}</Subtitle>
            </CardItem>
            <CardItem>
              <Text style={{fontWeight:'normal'}}>By: {navigation.getParam('author', 'No Author')}</Text>
            </CardItem>

            <CardItem cardBody>
            <Image source={{uri: navigation.getParam('image', 'No Image')}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>
            <Text>{navigation.getParam('body', 'No Body').replace(regex, '')}</Text>
            </CardItem>

         </Card>
        </Content>
      </Container>
        )
      }
    }

export default BlogSingleTab;
