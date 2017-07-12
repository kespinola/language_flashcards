import React from 'react';
import CardView from 'react-native-cardview'
import { Text, View, Button, StyleSheet } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <View style={styles.content}>
        <Button
          onPress={() => { history.push('/sessions') }}
          title="Start"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
  },
})

export default Home;
