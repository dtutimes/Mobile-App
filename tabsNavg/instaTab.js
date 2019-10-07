import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Title, Body, Subtitle, Left, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class InstaTab extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      dataSource : null
    }
  }

  async componentDidMount(){
   try{ const response = await fetch('https://api.myjson.com/bins/z1m91');
    const responseJson = await response.json();
    this.setState({isLoading : false, dataSource : responseJson.posts}, function(){

    });
  }
  catch(error){
    console.error(error);
  }


  }


  render(){
    if(this.state.isLoading){
      return <View style = {{flex:1 , justifyContent : 'center'}}>
        <ActivityIndicator />

      </View>
    }

    return(
      <Container>
        <Content>
{this.displaydata()}
        </Content>
      </Container>
      
    )
    
}

displaydata() {
  return this.state.dataSource.map( (item) => {
    return (
    
        <Card transparent>

          <CardItem>
            <Left>
              <Thumbnail source={{uri:item.thumbnail}} />
              <Body>
                <Text style={{fontWeight:'bold'}}>{item.pagetitle}</Text>
                <Text>{item.time}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri:item.image}} style={{height: 200, width: null, flex:1}} />
          </CardItem>
          <CardItem>
              <Ionicons name={'md-heart'} size={25} color={'green'} />
              <Text>{item.likes}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{fontWeight:'bold'}}>{item.title}</Text>
              <Text>{item.body}</Text>
            </Body>
          </CardItem>
       </Card>

      
  )
  }
)

}
}

export default InstaTab;


