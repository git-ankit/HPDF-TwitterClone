import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Content, Header, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class tabOne extends Component {
	render() {    
    	return (
    		<Content>
				<Card style={{flex: 0}} >
	              <CardItem>
	                <Left>
	                  <Thumbnail source={{uri: 'http://livegrowsmile.com/wp-content/uploads/2016/06/Harry-Potter-braces.png'}} />
	                  <Body>
	                    <Text style={{fontWeight: 'bold'}}>Harry Potter <Text note>@chosen_one . 1m ago</Text></Text>
	                    <Text>
	                    	*Gulps*
	                  	</Text>
	                  </Body>
	                </Left>	                
	              </CardItem>	              
	              <CardItem>
	                <Left>
	                  
	                  	<Icon name="ios-text-outline" style={{color: 'grey'}} />
	                    <Text style={{color: 'grey'}}>394         </Text>
	                    
	                    	<Icon name="ios-repeat-outline" style={{color: 'grey'}} />
	                    	<Text style={{color: 'grey'}}>394      </Text>
		                    
		                    	<Icon name="ios-heart-outline" style={{color: 'grey'}} />
		                    	<Text style={{color: 'grey'}}>394         </Text>
		                    	
			                    	<Icon name="ios-mail-outline" style={{color: 'grey'}} />
			                    	<Text style={{color: 'grey'}}>394</Text>
	                </Left>
	              </CardItem>
	            </Card>




				<Card style={{flex: 0}} >
	              <CardItem>
	                <Left>
	                  <Thumbnail source={{uri: 'https://shawglobalnews.files.wordpress.com/2017/06/gettyimages-77202458.jpg?quality=70&strip=all&w=720&h=480&crop=1'}} />
	                  <Body>
	                    <Text style={{fontWeight: 'bold'}}>Voldemort <Text note>@tom_riddle . 3m ago</Text></Text>
	                    <Text>
	                    	Got you! *smirking while tipping wand*
	                  	</Text>
	                  </Body>
	                </Left>	                
	              </CardItem>	              
	              <CardItem>
	                <Left>
	                  
	                  	<Icon name="ios-text-outline" style={{color: 'grey'}} />
	                    <Text style={{color: 'grey'}}>394         </Text>
	                    
	                    	<Icon name="ios-repeat-outline" style={{color: 'grey'}} />
	                    	<Text style={{color: 'grey'}}>394      </Text>
		                    
		                    	<Icon name="ios-heart-outline" style={{color: 'grey'}} />
		                    	<Text style={{color: 'grey'}}>394         </Text>
		                    	
			                    	<Icon name="ios-mail-outline" style={{color: 'grey'}} />
			                    	<Text style={{color: 'grey'}}>394</Text>
	                </Left>
	              </CardItem>
	            </Card>


	            <Card style={{flex: 0}} >
	              <CardItem>
	                <Left>
	                  <Thumbnail source={{uri: 'http://livegrowsmile.com/wp-content/uploads/2016/06/Harry-Potter-braces.png'}} />
	                  <Body>
	                    <Text style={{fontWeight: 'bold'}}>Harry Potter <Text note>@chosen_one . 5m ago</Text></Text>
	                    <Text>
	                    	Backpacking through County #WanderLust!
	                  	</Text>
	                  </Body>
	                </Left>	                
	              </CardItem>	              
	              <CardItem>
	                <Left>
	                  
	                  	<Icon name="ios-text-outline" style={{color: 'grey'}} />
	                    <Text style={{color: 'grey'}}>394         </Text>
	                    
	                    	<Icon name="ios-repeat-outline" style={{color: 'grey'}} />
	                    	<Text style={{color: 'grey'}}>394      </Text>
		                    
		                    	<Icon name="ios-heart-outline" style={{color: 'grey'}} />
		                    	<Text style={{color: 'grey'}}>394         </Text>
		                    	
			                    	<Icon name="ios-mail-outline" style={{color: 'grey'}} />
			                    	<Text style={{color: 'grey'}}>394</Text>
	                </Left>
	              </CardItem>
	            </Card>


	           

          	</Content>
    	)

    }
}