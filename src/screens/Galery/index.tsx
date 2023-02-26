import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

function Galery() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Galery</Text>
    </SafeAreaView>
  );
}

export default React.memo(Galery);
