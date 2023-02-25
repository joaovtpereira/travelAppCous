import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

type AttractionCardProps = {
  title: String;
  imageSrc: string;
  subtitle: String;
};

function AttractionCard({title, imageSrc, subtitle}: AttractionCardProps) {
  return (
    <View style={styles.card}>
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
};

export default React.memo(AttractionCard);
