// import {
//   SafeAreaView,
//   StyleProp,
//   StyleSheet,
//   Text,
//   View,
//   ViewStyle,
// } from 'react-native';
// import React, {useCallback, useState} from 'react';
// import RangeSlider from 'rn-range-slider';
// interface sliderProps {
//   style?: StyleProp<ViewStyle> | undefined;
// }

// export default function App() {
//   const [low, setLow] = useState(0);
//   const [high, setHigh] = useState(100);

//   const renderThumb = useCallback((name: any) => {
//     return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
//   }, []);
//   const renderRail = useCallback(() => <View style={styles.root} />, []);
//   const renderRailSelected = useCallback(
//     () => <View style={styles.rail} />,
//     [],
//   );
//   const renderLabel = useCallback((text: any) => {
//     return (
//       <View style={styles.label}>
//         <Text style={styles.text}>{text}</Text>
//       </View>
//     );
//   }, []);
//   const renderNotch = useCallback(
//     (props: any) => <View style={styles.notch} {...props} />,
//     [],
//   );
//   const handleValueChange = useCallback((low: any, high: any) => {
//     setLow(low);
//     setHigh(high);
//     console.log('low', low, ' high', high);
//   }, []);

//   return (
//     <SafeAreaView>
//       <Text>App</Text>
//       <RangeSlider
//         style={{height: 40, width: '90%'}}
//         min={0}
//         max={100}
//         step={1}
//         floatingLabel
//         renderThumb={renderThumb}
//         renderRail={renderRail}
//         renderRailSelected={renderRailSelected}
//         renderLabel={renderLabel}
//         renderNotch={renderNotch}
//         onSliderTouchEnd={handleValueChange}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   rootLow: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#7f7f7f',
//     backgroundColor: '#aaaaaa',
//   },
//   rootHigh: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     borderWidth: 2,
//     borderColor: '#7f7f7f',
//     backgroundColor: '#ffffff',
//   },
//   root: {
//     flex: 1,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: '#7f7f7f',
//   },
//   notch: {
//     width: 8,
//     height: 8,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: '#4499ff',
//     borderLeftWidth: 4,
//     borderRightWidth: 4,
//     borderTopWidth: 8,
//   },
//   label: {
//     alignItems: 'center',
//     padding: 8,
//     backgroundColor: '#4499ff',
//     borderRadius: 4,
//     width: 80,
//   },
//   text: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   rail: {
//     height: 4,
//     backgroundColor: '#4499ff',
//     borderRadius: 2,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import SliderScreen from './src/Screens/slider';
import Thumb from './src/Slider/thumb';
import Rail from './src/Slider/rail';
import RailSelected from './src/Slider/railSelected';
import Label from './src/Slider/label';
import Notch from './src/Slider/notch';

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
  return (
    <View style={{height: 300}}>
      <SliderScreen
        min={0}
        max={150}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderThumb={renderThumb}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        handleValueChange={handleValueChange}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
