import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './styles';

function AttractionDetails({route, navigation}: any) {
  const {item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onBack} style={{margin: 32}}>
        Back
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);
