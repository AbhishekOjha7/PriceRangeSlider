import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const Notch = (props: any) => {
  return <View style={styles.root} {...props} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: normalize(8),
    height: normalize(8),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLOR.RED,
    borderLeftWidth: normalize(4),
    borderRightWidth: normalize(4),
    borderTopWidth: normalize(8),
  },
});
