import React, {useState} from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface TextInputComponentProps {
    placeholder: string,
    value: string;
    onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
        style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
  )
}

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 330,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
})