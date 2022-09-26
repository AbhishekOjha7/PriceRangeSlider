import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const Rail = () => {
  return <View style={styles.root} />;
};

export default Rail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: normalize(4),
    borderRadius: normalize(2),
    backgroundColor: COLOR.lightgrey,
  },
});
