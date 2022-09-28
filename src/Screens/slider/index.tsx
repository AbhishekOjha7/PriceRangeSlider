/**
 * We have to install (yarn add rn-range-slider)
 * @props (min) is for give minimum range of slider
 * @props (max) is for give maximum range of slider
 * @props (renderThumb) is used for render thumb it takes name 'high' and 'low'
 * @props (renderRail) is used for render the "rail" for thumbs Rendered component should have flex: 1 style so it won't fill up the whole space
 * @props (renderRailselected) is used for render the selected part of "rail" for thumbs.Rendered component should not have flex: 1 style so it fills up the whole space.
 * @props (renderLabel) Should render label above thumbs If no function is passed, no label will be drawn
 * @props (renderNotch) Should render the notch below the label,Classic notch is a small triangle below the label
 * @props (handleValueChange) Will be called when a value was changed
 * @props (floatingLabel) floatingLabel	If set to true, labels will not take space in component tree
 * @props (disableRange) is used for one sliding
 * @props (disabled) is used for disabled the thumb movement
 * @props {step} is used for step jump
 * @props {minRange} is used for Minimum range of thumbs allowed to be selected by the user
 * @props {onSliderTouchEnd} Will be called when user end interaction with slider
 * @props {onSliderTouchStart} will be calld when user start interaction with slider
 * @props {onValueChanged} Will be called when a value was changed.
 */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode, useCallback, useState} from 'react';
import RangeSlider from 'rn-range-slider';
import {normalize} from '../../utils/dimensions';
import {COLOR} from '../../utils/colors';

interface sliderProps {
  min: number;
  max: number;
  step?: number;
  minRange?: number;
  disabled?: boolean;
  floatingLabel?: boolean;
  disableRange?: boolean;
  onSliderTouchEnd?: (low: number, high: number) => void;
  onSliderTouchStart?: (low: number, high: number) => void;
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
    step = 1,
    minRange,
    disableRange = false,
    disabled = false,
    onSliderTouchEnd,
    onSliderTouchStart,
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}> Selected Price Range </Text>
      <RangeSlider
        style={styles.RangeView}
        min={min}
        max={max}
        step={step}
        minRange={minRange}
        floatingLabel
        disableRange={disableRange}
        disabled={disabled}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={changedValue}
        onSliderTouchEnd={onSliderTouchEnd}
        onSliderTouchStart={onSliderTouchStart}
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
  container: {
    flex: 1,
  },
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
  head: {
    color: COLOR.BLACK,
    fontSize: 22,
    fontWeight: '700',
    left: normalize(14),
  },
});
