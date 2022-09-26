import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: normalize(8),
    backgroundColor: COLOR.RED,
    borderRadius: normalize(4),
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(Label);
