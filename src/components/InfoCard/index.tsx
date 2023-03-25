import React from 'react';
import {Image, StyleProp, Text, TextStyle, View} from 'react-native';

import styles from './styles';

type InfoCardProps = {
  icon: any;
  text: string;
  style: StyleProp<TextStyle>;
};

function InfoCard({icon, text, style}: InfoCardProps) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
}

InfoCard.defaultProps = {
  text: 'DefaultProps',
  style: {},
};

export default React.memo(InfoCard);
