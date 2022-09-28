import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
const Label = ({text}: any) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
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
