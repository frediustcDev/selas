import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Text, Footer, Button } from "native-base";

class EventDetail extends Component {
  state = {};

  render() {
    const {} = style;
    console.log(this.props.navigation.getParam("id", "undefined"));
    return (
      <Container>
        <Content>
          <Image />
        </Content>
      </Container>
    );
  }
}

export default EventDetail;

const style = StyleSheet.create({});
