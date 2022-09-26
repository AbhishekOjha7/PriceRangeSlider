import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/colors';
const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 12;
const Thumb = ({name}: any) => {
  return (
    // <TouchableOpacity
    //   style={
    //     name == 'high'
    //       ? high
    //         ? styles.rootSelectedHigh
    //         : styles.rootHigh
    //       : low
    //       ? styles.rootSelectedLow
    //       : styles.rootLow
    //   }
    // />
    <TouchableOpacity
      style={name == 'high' ? styles.rootHigh : styles.rootLow}
    />
  );
};

export default Thumb;

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
  rootSelectedLow: {
    width: THUMB_RADIUS_LOW * 2.8,
    height: THUMB_RADIUS_LOW * 2.8,
    borderRadius: THUMB_RADIUS_LOW * 2,
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
  rootSelectedHigh: {
    width: THUMB_RADIUS_HIGH * 2.8,
    height: THUMB_RADIUS_HIGH * 2.8,
    borderRadius: THUMB_RADIUS_HIGH * 2,
    borderWidth: 1,
    borderColor: COLOR.RED,
    backgroundColor: COLOR.WHITE,
  },
});
