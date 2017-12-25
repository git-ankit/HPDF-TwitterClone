import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Header, Right, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Item, Input } from 'native-base';
export default class tabTwo extends Component {
	render() {    
    	return (
        
    		<Content>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
            

          
        </Content>
    	)

    }
}