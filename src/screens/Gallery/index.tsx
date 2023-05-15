import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

function Gallery({route, navigation}: any) {
  const {images} = route.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={images}
          style={{marginBottom: 24, paddingHorizontal: 24}}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />

        <TouchableOpacity style={styles.backContainer} onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Gallery);
