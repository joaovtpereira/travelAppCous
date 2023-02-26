import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type CategoriesProps = {
  categories: String[];
  selectedCategory: String;
  onCategoryPress(index: string): void;
};

function Categories({
  categories,
  selectedCategory,
  onCategoryPress,
}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}: any) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.sectedItemContainer : {},
              index === 0 ? {marginLeft: 32} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.sectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

Categories.defaultProps = {
  categories: [],
  selectedCategory: 'All',
  onCategoryPress: () => {},
};

export default React.memo(Categories);
