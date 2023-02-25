import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import styles from './styles';

type TitleProps = {
  text: string;
  style: StyleProp<TextStyle>;
};

function Title({text, style}: TitleProps) {
  return <Text style={[styles.title, style]}>{text}</Text>;
}

Title.defaultProps = {
  text: 'DefaultProps',
  style: {},
};

export default React.memo(Title);
