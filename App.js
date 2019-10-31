import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {client} from './components/Shopify/index'
import Prod from './components/Shopify/Product'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: [],
    }
  }

  componentWillMount(){
    client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      })
    })
    }
  
  render(){
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Prod products = {this.state.products}
            client = {client} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
