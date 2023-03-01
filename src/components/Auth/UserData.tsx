import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import useAuth from "../../context/useAuth";

const UserData = () => {

  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth?.firstName} ${auth?.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth?.firstName} ${auth?.lastName}`} />
        <ItemMenu title="Username" text={`${auth?.username}`} />
        <ItemMenu title="Email" text={`${auth?.email}`} />
        <ItemMenu title="Total Favoritos" text={`0 Pokemons`} />
      </View>
      <Button title="Desconectar" onPress={logout} />
    </View>
  );
};

type ItemMenuProps = {
  title: string;
  text: string;
};

function ItemMenu({ title, text }: ItemMenuProps) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  itemMenuText: {
    flexShrink: 1,
  },
});

export default UserData;
