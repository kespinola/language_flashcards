import React from 'react';
import { Button,TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardView from 'react-native-cardview';
import { changeLang, nextCard, addCorrect, prevCard } from './../../actions'

const CARD_HEIGHT = 300;
const CARD_WIDTH = 200;
const FOOTER_HEIGHT = 75;

const mapStateToProps = ({cards, codex, lang, current}) => ({
  word: cards[current][codex[lang ? 0 : 1]]
})

class Sessions extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){
    const { word, dispatch } = this.props;

    return(
      <View style={styles.content}>
        <CardView
          style={styles.card}
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
        >
          <TouchableNativeFeedback style={styles.body} onPress={()=> dispatch(changeLang())}>
            <Text>{word}</Text>
          </TouchableNativeFeedback>
          <View style={styles.footer}>
            <Button title="No"/>
            <Button title="Yes"/>
          </View>
        </CardView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height: CARD_HEIGHT - FOOTER_HEIGHT,
  },
  footer: {
    alignSelf: 'flex-end',
    height: FOOTER_HEIGHT,
    display: 'flex',
    alignItems: 'flex-start'
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH
  }
})

export default connect(mapStateToProps)(Sessions);
