import React from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { fetchOrganizations } from '../redux/modules/organizations';

class Home extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchOrganizations());
  }
  render () {
    const { navigation } = this.props;
    console.log(this.props.organizations);
    return (
      <View style={styles.container}>
        {this.props.loading && <View><Text>Loading</Text></View>}
        <View>
          {
            this.props.organizations.map(org => (
              <View key={org.name}>
                <Text>{org.name}</Text>
              </View>
            ))
          }
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Page2');    
        }}>
          <Text style={styles.text}>Go to page 2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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

export default connect((state) => ({
  loading: state.organizations.loading,
  organizations: state.organizations.organizations
}))(Home);