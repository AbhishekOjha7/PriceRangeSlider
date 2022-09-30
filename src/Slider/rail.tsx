import React from 'react';
import {View, StyleSheet, StyleProp, ViewProps} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
interface railProps {
  railStyle?: StyleProp<ViewProps>;
}
const Rail = (props: railProps) => {
  const {railStyle} = props;
  return <View style={[styles.root, railStyle]} />;
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
