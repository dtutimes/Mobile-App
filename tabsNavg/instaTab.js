import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class InstaTab extends Component {
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
                  <Text>X TIME AGO</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../goldbloom.jpg')} style={{height: 200, width: null, flex:1}} />
            </CardItem>
            <CardItem>
                <Ionicons name={'md-heart'} size={25} color={'green'} />
                <Text>X likes</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight:'bold'}}>dtu_times</Text>
                <Text>Maybe it is a blessing in disguise. I see my reflection in your eyes, I know you see it too.</Text>
              </Body>
            </CardItem>
         </Card>

         <Card transparent>

           <CardItem>
             <Left>
               <Thumbnail source={require('../goldbloom.jpg')} />
               <Body>
                 <Text style={{fontWeight:'bold'}}>dtu_times</Text>
                 <Text>X TIME AGO</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={require('../goldbloom.jpg')} style={{height: 200, width: null, flex:1}} />
           </CardItem>
           <CardItem>
               <Ionicons name={'md-heart'} size={25} color={'green'} />
               <Text>X likes</Text>
           </CardItem>
           <CardItem>
             <Body>
               <Text style={{fontWeight:'bold'}}>dtu_times</Text>
               <Text>Maybe it is a blessing in disguise. I see my reflection in your eyes, I know you see it too.</Text>
             </Body>
           </CardItem>
        </Card>

        <Card transparent>

          <CardItem>
            <Left>
              <Thumbnail source={require('../goldbloom.jpg')} />
              <Body>
                <Text style={{fontWeight:'bold'}}>dtu_times</Text>
                <Text>X TIME AGO</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../goldbloom.jpg')} style={{height: 200, width: null, flex:1}} />
          </CardItem>
          <CardItem>
              <Ionicons name={'md-heart'} size={25} color={'green'} />
              <Text>X likes</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{fontWeight:'bold'}}>dtu_times</Text>
              <Text>Maybe it is a blessing in disguise. I see my reflection in your eyes, I know you see it too.</Text>
            </Body>
          </CardItem>
       </Card>
       
        </Content>
      </Container>
    )
  }
}
export default InstaTab;
