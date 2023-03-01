import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../context/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { auth, login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      setError("");
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={[styles.input, { borderColor: formik.errors.username ? "#f00" : "#000" }]}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={text => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={[styles.input, { borderColor: formik.errors.password ? "#f00" : "#000" }]}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={() => formik.handleSubmit()} />
      {formik.errors.username ? <Text style={styles.error}>{formik.errors.username}</Text> : undefined}
      {formik.errors.password ? <Text style={styles.error}>{formik.errors.password}</Text> : undefined}
      {error ? <Text style={styles.error}>{error}</Text> : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
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

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

export default LoginForm;
