import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const Thumb = ({name}: any) => {
  return (
    <TouchableOpacity
      style={name == 'high' ? styles.rootHigh : styles.rootLow}
    />
  );
};

export default Thumb;

const styles = StyleSheet.create({
  rootLow: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: normalize(12),
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
  rootHigh: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: normalize(12),
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
});
