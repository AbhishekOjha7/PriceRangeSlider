import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: normalize(4),
    backgroundColor: COLOR.RED,
    borderRadius: normalize(2),
  },
});
