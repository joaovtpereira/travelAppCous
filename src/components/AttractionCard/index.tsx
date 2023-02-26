import React from 'react';
import {
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

type AttractionCardProps = {
  title: String;
  imageSrc: string;
  subtitle: String;
  style: StyleProp<ViewStyle>;
  onPress(): void;
};

function AttractionCard({
  title,
  imageSrc,
  subtitle,
  style,
  onPress,
}: AttractionCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

AttractionCard.defaultProps = {
  title: '',
  imageSrc: '',
  subtitle: '',
  style: {},
  onPress: () => {},
};

export default React.memo(AttractionCard);
