import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewProps} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
interface labelProps {
  labelStyle?: StyleProp<ViewProps>;
  text: string;
  labeltxtStyle?: StyleProp<ViewProps>;
}
const Label = (props: labelProps) => {
  const {text, labelStyle, labeltxtStyle} = props;
  return (
    <View style={[styles.root, labelStyle]}>
      <Text style={[styles.text, labeltxtStyle]}>{text}</Text>
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
    color: COLOR.WHITE,
  },
});

export default Label;
