import React from 'react';
import {View, Image, Text, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';

type AttractionCardProps = {
  title: String;
  imageSrc: string;
  subtitle: String;
  style: StyleProp<ViewStyle>;
};

function AttractionCard({
  title,
  imageSrc,
  subtitle,
  style,
}: AttractionCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

AttractionCard.defaultProps = {
  title: '',
  imageSrc: '',
  subtitle: '',
  style: {},
};

export default React.memo(AttractionCard);
