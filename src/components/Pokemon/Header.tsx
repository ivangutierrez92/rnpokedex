import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { POKEMON_TYPE_COLORS } from "../../utils/constants";
import { capitalize, transform } from "lodash";

type Props = { name: string; id: number; image: string; type: string };

const Header: FC<Props> = ({ name, id, image, type }) => {
  const color = POKEMON_TYPE_COLORS[type];
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${id}`.padStart(3, '0')}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27
  },
  order: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Header;
