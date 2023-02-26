import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'All';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found.</Text>
        }
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
              categories={[ALL, ...categories]}
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

export default React.memo(Home);
