import {StyleSheet, TouchableOpacity, StyleProp, ViewProps} from 'react-native';
import React from 'react';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
interface thumbProps {
  stylethumbHigh?: StyleProp<ViewProps>;
  name?: string;
  stylethumbLow?: StyleProp<ViewProps>;
}
const Thumb = (props: thumbProps) => {
  const {name, stylethumbHigh, stylethumbLow} = props;

  return (
    <TouchableOpacity
      style={
        name == 'high'
          ? [styles.rootHigh, stylethumbHigh]
          : [styles.rootLow, stylethumbLow]
      }
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
