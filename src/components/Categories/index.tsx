import React from 'react';
import {FlatList, Text, View} from 'react-native';

import styles from './styles';

type CategoriesProps = {
  categories: String[];
  selectedCategory: number;
};

function Categories({categories, selectedCategory}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === index;
        return (
          <View
            style={[
              styles.itemContainer,
              selected ? styles.sectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.sectedItem : {}]}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
}

Categories.defaultProps = {
  categories: [],
  selectedCategory: 0,
};

export default React.memo(Categories);
