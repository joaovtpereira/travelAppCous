import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where  do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subtitle} />

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

        <View style={styles.row}>
          <AttractionCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ac6QK6qIl_UQU5nk783pNxFZIpKoAFDphw&usqp=CAU"
            title={'Montanha Russa'}
            subtitle="Uberlandia"
          />

          <AttractionCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ac6QK6qIl_UQU5nk783pNxFZIpKoAFDphw&usqp=CAU"
            title={'Montanha Russa'}
            subtitle="São paulo"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
