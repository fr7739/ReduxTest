import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../assets/styles'

class Prod extends Component {
    render(){
        let products = this.props.products.map((product) => {

            return(
                <View key = {product.id.toString()} style = {{borderWidth: 2}}>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={{uri: product.images[0].src}} style = {styles.buttonStyle3} />
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Text>{product.title}</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Text>Price: {product.variants[0].price}</Text>
                    </View>
                </View>

            )
        })
        return(
            <View style = {{flex: 2, flexDirection: 'row'}}>
            <ScrollView>
            {products}
            </ScrollView>
            </View>
        )
    }
}

export default Prod