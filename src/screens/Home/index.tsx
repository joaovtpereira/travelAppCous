import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/Title';

function Home() {
  return (
    <SafeAreaView>
      <View>
        <Title text="My first Component" />
        <Title />
      </View>
    </SafeAreaView>
  );
}

export default Home;
