import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Page2 = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            navigation.goBack();    
        }}>
            <Text style={styles.text}>Go back</Text>
        </TouchableOpacity>
    </View>
);

Page2.navigationOptions = {
    title: 'Page 2'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ec42a3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Page2;