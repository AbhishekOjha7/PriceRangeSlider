import React from 'react';
import {View, StyleSheet, StyleProp, ViewProps} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
interface notchProps {
  notchStyle?: StyleProp<ViewProps>;
}
const Notch = (props: notchProps) => {
  const {notchStyle} = props;
  return <View style={[styles.root, notchStyle]} />;
};
export default Notch;

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
