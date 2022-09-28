import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import SliderScreen from './src/Screens/slider';
import Thumb from './src/Slider/thumb';
import Rail from './src/Slider/rail';
import RailSelected from './src/Slider/railSelected';
import Label from './src/Slider/label';
import Notch from './src/Slider/notch';
import {normalize} from './src/utils/dimensions';

const App = () => {
  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );

  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: any) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue: any, highValue: any) => {
    console.log(lowValue, '||', highValue);
  }, []);
  const onSliderTouchStart = (low: number, high: number) => {
    console.log('low, high', low, high);
  };
  return (
    <View style={styles.container}>
      <SliderScreen
        min={0}
        max={150}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderThumb={renderThumb}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        handleValueChange={handleValueChange}
        // minRange={50}
        // disableRange={true}
        // disabled={true}
        onSliderTouchStart={onSliderTouchStart}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: normalize(300),
  },
});
