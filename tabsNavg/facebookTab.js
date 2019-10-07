import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FacebookTab extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  async componentDidMount(){
    try {
      const response = await fetch('https://api.myjson.com/bins/gtr51');
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
    if(this.state.isLoading){
      return <View style={{ flex:1, padding:20, justifyContent:'center'}}>
        <ActivityIndicator/>
      </View>
    }
    return(
      <Container>
      <Content>
        
        {this.displaydata()}

        </Content>
      </Container>
    );

    
    
    
  }

  displaydata(){
    return this.state.dataSource.map((item)=>{
      return (
        
           <Card transparent>
             <CardItem cardBody>
               <Image source={{uri : item.image}} style={{height: 200, width: null, flex:1}} />
             </CardItem>
             <CardItem>
               <Left>
                 <Text>
                   <Ionicons name={'md-thumbs-up'} size={25} color={'green'} />
                   {item.likes}</Text>
               </Left>
               <Right>
                 <Text>
                   <Ionicons name={'ios-chatbubbles'} size={25} color={'green'} />
                     {item.comments}</Text>
               </Right>
             </CardItem>
             <CardItem>
               <Body>
                 <Text>{item.body}</Text>
               </Body>
             </CardItem>
          </Card>
      
    
      )
    }
  

    );
  }
}
export default FacebookTab;
