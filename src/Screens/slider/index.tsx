import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, useCallback, useState} from 'react';
import RangeSlider from 'rn-range-slider';
import {normalize} from '../../utils/dimensions';

interface sliderProps {
  min: number;
  max: number;
  renderThumb: (name: 'high' | 'low') => ReactNode;
  renderRail: () => ReactNode;
  renderRailSelected: () => ReactNode;
  renderLabel: (value: number) => ReactNode;
  renderNotch: (value: number) => ReactNode;
  handleValueChange?: (
    low: number,
    high: number,
    byUser: boolean | false,
  ) => void;
  floatingLabel?: boolean;
  disableRange?: boolean;
  disabled?: boolean;
}

const SliderScreen = (props: sliderProps) => {
  const {
    min,
    max,
    renderThumb,
    renderRail,
    renderRailSelected,
    renderLabel,
    renderNotch,
    handleValueChange,
  } = props;
  const [low, setLow] = useState(min);
  const [high, setHigh] = useState(max);
  const changedValue = useCallback((lowValue: any, highValue: any) => {
    setLow(lowValue);
    setHigh(highValue);
    if (handleValueChange) {
      handleValueChange(lowValue, highValue, false);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> Selectd Price Range </Text>
      <RangeSlider
        style={styles.RangeView}
        min={min}
        max={max}
        step={1}
        floatingLabel //label are override on slider
        // disableRange            // for onside sliding
        // disabled               //for disabled thumb movement
        allowLabelOverflow
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={changedValue}
      />
      <View style={styles.horizontalContainer}>
        <Text style={styles.valueText}>{low}</Text>
        <Text style={styles.valueText}>{high}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },

  valueText: {
    width: 'auto',
    color: 'black',
    fontSize: normalize(20),
  },
  RangeView: {
    height: normalize(40),
    width: '90%',
    marginTop: normalize(40),
    left: normalize(20),
  },
});
