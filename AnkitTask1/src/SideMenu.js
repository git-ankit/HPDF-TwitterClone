import React from 'react';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Footer, FooterTab, Badge, Item, Input, Drawer, List, ListItem, Separator } from 'native-base';
import profile from '../profile';

export default class SideMenu extends React.Component {
  static navigationOptions = {

    header: null,

  };

	render(){
	 const { navigate } = this.props.navigation;
		return(
			
			<Content style = {{backgroundColor:'#ffffff'}}>
				
				<List>
					<Text/>
            		<ListItem avatar>
             			<Left>
                			<Thumbnail source={{ uri: 'https://scontent.fbom13-1.fna.fbcdn.net/v/t1.0-9/17457378_1123099901151848_8532925529740182503_n.jpg?oh=8d131f1c44600626760182309a8c1c0a&oe=5ABF8F5F' }} />
                		</Left>
                	</ListItem>
                	<Text style={{fontWeight: 'bold'}}>     Ankit Tiwari</Text>
                	<Text note>     @ankit_tiwari10</Text>
                	<Text/>
                	<Text>    54<Text note> Following<Text>    5<Text note> Followers</Text></Text></Text></Text>
              	</List>


              	<List >
              		<ListItem>
              			
          			</ListItem>
          		</List>

              	<List >
              		<ListItem icon last>
              			<Left>
                			<Icon name="ios-person-outline" />
              			</Left>	
          				<Body  >
            				<Button transparent dark>
            					<Text uppercase={false} style={{fontSize: 18}} onPress={()=>navigate("Profile")}>Profile</Text>
          					</Button>
          				</Body>
          			</ListItem>
          		</List>

          		<List >
              		<ListItem icon last>
              			<Left>
                			<Icon name="ios-list-box-outline" />
              			</Left>	
          				<Body  >
            				<Button transparent dark>
            					<Text uppercase={false} style={{fontSize: 18}}>Lists</Text>
          					</Button>
          				</Body>
          			</ListItem>
          		</List>

          		<List >
              		<ListItem icon last>
              			<Left>
                			<Icon name="ios-flash-outline" />
              			</Left>	
          				<Body  >
            				<Button transparent dark>
            					<Text uppercase={false} style={{fontSize: 18}}>Moments</Text>
          					</Button>
          				</Body>
          			</ListItem>
          		</List>

          		<List>
          			<ListItem >
            			
          			</ListItem>
          		</List>

          		<List>
          			<ListItem last>
            			<Text>Settings and privacy</Text>
          			</ListItem>
          			
          			<ListItem last>
            			<Text>Help Centre</Text>
          			</ListItem>
              	</List>
            </Content>
			

		)
	};
}
