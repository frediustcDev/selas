import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { Header, Right, Body, Title, Left, Button, Icon } from "native-base";
import Ripple from "react-native-material-ripple";
import {
  rnSquare,
  rnSetPosition,
  bgColor,
  bgLight,
  textDark,
  textColor,
  rnNoSpace,
  primaryColor,
  rnSetPadding,
  BASE_SPACE,
  HEADER_BTN
} from "../../tools";
import { AUTH } from "../../config/base";

const Btn = ({ press, name, type, btnStyle }) => (
  <Ripple
    onPress={press}
    style={{
      ...rnNoSpace,
      // ...rnSquare(HEADER_BTN),
      borderRadius: HEADER_BTN,
      overflow: "hidden"
    }}
    rippleColor={primaryColor}
    rippleOpacity={0.3}
    rippleDuration={250}
    rippleCentered
  >
    <Button
      transparent
      rounded
      style={{
        // backgroundColor: bgLight,
        elevation: 0,
        ...rnSquare(HEADER_BTN),
        ...rnSetPosition(),
        ...rnNoSpace,
        ...btnStyle
      }}
    >
      <Icon
        type={type}
        name={name}
        style={{
          color: textColor,
          fontSize: 16,
          ...rnNoSpace
        }}
      />
    </Button>
  </Ripple>
);

const MainHeader = ({ title, navigation, currentUser, ...rest }) => {
  return (
    <Header
      transparent
      style={{
        backgroundColor: bgColor,
        ...rnSetPadding(BASE_SPACE, "horizontal"),
        borderBottomWidth: 1,
        borderBottomColor: bgLight
      }}
      {...rest}
    >
      <Left>
        <Btn
          type="Feather"
          name="user"
          btnStyle={{ backgroundColor: bgLight }}
          press={() => navigation.navigate("account")}
        />
      </Left>
      <Body>
        <Title style={{ color: textDark, fontFamily: "font" }}>
          {title || "Ticketing App"}
        </Title>
      </Body>
      <Right>
        <Btn
          type="Feather"
          name="search"
          press={() => navigation.navigate("search")}
        />

        {currentUser.admin && (
          <React.Fragment>
            <Btn
              type="Feather"
              name="activity"
              press={() => navigation.navigate("reports")}
            />
            <Btn
              type="Feather"
              name="plus"
              press={() => navigation.navigate("add")}
            />
          </React.Fragment>
        )}
      </Right>
    </Header>
  );
};

export default withNavigation(
  connect(({ currentUser }) => ({ currentUser }))(MainHeader)
);
