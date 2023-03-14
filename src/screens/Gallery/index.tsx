import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

function Gallery() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Galery</Text>
    </SafeAreaView>
  );
}

export default React.memo(Gallery);
