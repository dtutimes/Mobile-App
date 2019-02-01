import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FacebookTab extends Component {
  render(){
    return (
      <Container>
        <Content>
          <Card transparent>

            <CardItem>
              <Left>
                <Thumbnail source={require('../goldbloom.jpg')} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>dtu_times</Text>
                  <Text style={{color:'gray',}}>11h ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Maybe it is a blessing in disguise. I see my reflection in your eyes, I know you see it too.</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../goldbloom.jpg')} style={{height: 200, width: null, flex:1}} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  <Ionicons name={'md-thumbs-up'} size={25} color={'green'} />
                  X likes</Text>
              </Left>
              <Right>
                <Text>
                  <Ionicons name={'ios-chatbubbles'} size={25} color={'green'} />
                    X comments</Text>
              </Right>
            </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
export default FacebookTab;
