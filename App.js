import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {client} from './src/Redux/Shopify/index'
import Prod from './components/Shopify/Product'
import store from './src/Redux/store'
import { Provider } from 'react-redux'
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
      <Provider store = {store}>
      <Prod products = {this.state.products}
            client = {client} />
            </Provider>
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
