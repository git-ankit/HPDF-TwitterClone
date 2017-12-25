import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connectStyle, Container, StyleProvider, Spinner, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Badge, Item, Input, Drawer, Tab, Tabs, TabHeading } from 'native-base';
import SideBar from './src/index';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class CardShowcaseExample extends Component {
  closeDrawer() {
      this._drawer._root.close()
    };
  openDrawer() {
    this._drawer._root.open()
  };
  render() {    
    return  (
      
      

      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
        <StyleProvider style={getTheme(material)}>
        <Container>

          <Header style={{elevation: 0}} hasTabs>
            <Left>
              <Button transparent onPress = {()=> this.openDrawer()}>
                <Thumbnail small source={{ uri: 'https://scontent.fbom13-1.fna.fbcdn.net/v/t1.0-9/17457378_1123099901151848_8532925529740182503_n.jpg?oh=8d131f1c44600626760182309a8c1c0a&oe=5ABF8F5F' }} />
              </Button>                
            </Left>
            <Body>
              <Text style={{fontWeight: 'bold'}}>Home</Text>              
            </Body>
            <Right/>
          </Header>

          <Tabs initialPage={0} >
            <Tab heading={ <TabHeading ><Icon name="ios-home" /></TabHeading>} ref = "tabone">
              
              <Tab1 />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-search" /></TabHeading>} >
              <Tab2 />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
              <Tab3 />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
              <Tab3 />
            </Tab>
          </Tabs>

        </Container>
      </StyleProvider> 
      </Drawer>

      
      
    );
  }
}
