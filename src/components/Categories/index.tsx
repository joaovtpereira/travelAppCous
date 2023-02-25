import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type CategoriesProps = {
  categories: String[];
  selectedCategory: number;
  onCategoryPress(index: number): void;
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
      renderItem={({item, index}) => {
        const selected = selectedCategory === index;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(index)}
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
  selectedCategory: 0,
  onCategoryPress: () => {},
};

export default React.memo(Categories);
