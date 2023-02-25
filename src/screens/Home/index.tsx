import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

import jsonData from '../../data/attractions.json';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Where  do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go?" />

              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>

            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[
                'All',
                'Popular',
                'Historical',
                'Random',
                'Trending',
                'Exclusive',
                'Others',
              ]}
            />
          </>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            imageSrc={item?.images?.length ? item?.images[0] : null}
            title={item?.name}
            subtitle={item?.city}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Home;
