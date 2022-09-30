import React from 'react';
import {StyleSheet, View, StyleProp, ViewProps} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
interface railselectedProps {
  railselectedStyle?: StyleProp<ViewProps>;
}
const RailSelected = (props: railselectedProps) => {
  const {railselectedStyle} = props;
  return <View style={[styles.root, railselectedStyle]} />;
};
export default RailSelected;

const styles = StyleSheet.create({
  root: {
    height: normalize(4),
    backgroundColor: COLOR.RED,
    borderRadius: normalize(2),
  },
});
