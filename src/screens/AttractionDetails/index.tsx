import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

function AttractionDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AttractionDetails</Text>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);
