import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Alert} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD MONGO DB</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su nombre"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su apellido"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su correo electronico"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ingrese su direccion"
        />
      </View>
      <View style={styles.mt_20}>
        <Pressable style={styles.button} onPress={() => Alert.alert('Se registro el usuario')}>
          <Text style={styles.titlebtn}>Guardar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#191970"
  },
  input: {
    height: 50,
    width: 330,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  mt_20: {
    marginTop: 20
  },
  button: {
    width: 330,
    height: 60,
    padding: 10,
    backgroundColor: "#191970",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  titlebtn: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
