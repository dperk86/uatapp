import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Page2');    
        }}>
            <Text style={styles.text}>Go to page 2</Text>
        </TouchableOpacity>
    </View>
);

Home.navigationOptions = {
    title: 'Home'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#222',
        fontWeight: 'bold'
    }
});

export default Home;