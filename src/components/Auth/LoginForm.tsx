import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Nombre de usuario" style={styles.input} autoCapitalize="none" />
      <TextInput placeholder="Contraseña" style={styles.input} autoCapitalize="none" secureTextEntry={true} />
      <Button title="Entrar" onPress={() => console.log("entrando")} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default LoginForm;