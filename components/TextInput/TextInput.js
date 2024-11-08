import React from 'react';
import { TextInput } from 'react-native';
import Style from "./Style"

function TextInputBox({ value, onChangeText, placeholder, 
    keyboardType, style, multiline, numberOfLines, maxLength }) {
  return (
    <TextInput
      style={[Style.input, style, { textAlignVertical: 'top', height: multiline ? 100 : 'auto' }]} // Ajuste a altura conforme necessário
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
  );
}

export default TextInputBox;
