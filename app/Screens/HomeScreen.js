import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header } from 'react-native-elements';
import SettingStack from '../Navigation/SettingsStack';
import SwipeCards from 'react-native-swipe-cards';
import Cards from '../Components/Cards';

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.props.fetchStations(this.props.navigation.state.params.categories, () => {});
  };
  saveThing(card) {
    this.props.saveStation(card);
  }

  handleYup() {
    let temp;
    temp = this.refs['swiper'].getCurrentCard();
    this.saveThing(temp);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }

  renderCards = data => {
    return (
      <SwipeCards
        ref={'swiper'}
        cards={data}
        renderCard={cardData => <Cards {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={() => this.handleYup()}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  };
  render() {
    const data = this.props.categories;
    return (
      <View style={styles.container}>
      <Header
        barStyle="light-content"
        backgroundColor="#fff"
        leftComponent={
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsStack')}>
          <Text style={{ color: 'black', fontSize: 20}}>Edit</Text>
          </TouchableOpacity>
        }
      />
      
        {data.length > 0 ? this.renderCards(data) : console.log('hi')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  },
  noMoreCardsText: {
    fontSize: 22
  }
});

function mapStateToProps({ categories }) {
  return { categories: categories };
}
export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
