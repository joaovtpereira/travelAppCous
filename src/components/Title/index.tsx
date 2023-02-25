import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

type TitleProps = {
  text: string;
};

function Title({text}: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}

Title.defaultProps = {
  text: 'DefaultProps',
};

export default Title;
