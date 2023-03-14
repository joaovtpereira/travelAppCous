import React from 'react';
import {ImageBackground, SafeAreaView, Text} from 'react-native';

import styles from './styles';

function AttractionDetails({route, navigation}: any) {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: mainImage}}
      />
      <Text onPress={onBack} style={{margin: 32}}>
        Back
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);
