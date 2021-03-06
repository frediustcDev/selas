import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Image } from "react-native-expo-image-cache";
import { View, Text, H3 } from "native-base";
import {
  rnFill,
  TITLE_SPACE,
  BASE_SPACE,
  textDark,
  textLight,
  linkActive,
  rnSetPadding,
  rnSetPosition
} from "../../tools";
import CardDetail from "../commons/CardDetail";
import StarList from "../commons/StarList";

const PriceSection = ({ basePrice }) => (
  <React.Fragment>
    <Text style={styles.fromStyle}>Price</Text>
    <Text style={styles.priceStyle}>{basePrice}$</Text>
  </React.Fragment>
);

const CarouselItem = ({
  id,
  name,
  location,
  price,
  date,
  rank,
  category,
  img,
  navigation
}) => {
  const { imageStyle, detailStyle, boxSeparatorStyle, titleStyle } = styles;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("eventDetail", { id })}
      style={{ ...rnSetPadding(BASE_SPACE, "horizontal") }}
    >
      <View style={imageStyle}>
        <Image
          uri={img.uri}
          preview={{ uri: img.cached }}
          resizeMode="cover"
          style={{ ...rnFill }}
        />
      </View>
      <View style={detailStyle}>
        <View style={boxSeparatorStyle}>
          <H3 style={titleStyle}>{name}</H3>
          <StarList rank={rank} />
        </View>
        <View style={boxSeparatorStyle}>
          <View>
            <CardDetail name="folder" title={`in ${category}`} />
            <CardDetail name="map-pin" title={location} />
            <CardDetail name="calendar" title={date} />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <PriceSection basePrice={price} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(CarouselItem);

// const star
const styles = StyleSheet.create({
  fromStyle: { fontFamily: "font_light", color: textLight, fontSize: 12 },
  priceStyle: { fontFamily: "font_sBold", color: linkActive, fontSize: 24 },
  imageStyle: {
    ...rnFill,
    height: 150,
    borderRadius: 5,
    elevation: 10,
    marginBottom: 10,
    overflow: "hidden"
  },
  detailStyle: {
    ...rnSetPadding(10),
    borderRadius: 5
  },
  boxSeparatorStyle: {
    flexDirection: "row",
    width: null,
    flex: 1,
    ...rnSetPosition("top", "row"),
    justifyContent: "space-between"
  },
  titleStyle: {
    fontFamily: "font_light",
    color: textDark,
    marginBottom: TITLE_SPACE
  }
});
