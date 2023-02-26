import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

function AttractionDetails({route}: any) {
  const {item} = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);
