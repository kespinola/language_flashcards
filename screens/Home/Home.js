import React from 'react';
import { Text, View, Button } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <View>
        <Button
          onPress={() => { history.push('/sessions') }}
          title="Start"
        />
      </View>
    );
  }
}

export default Home;
