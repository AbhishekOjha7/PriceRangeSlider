# PriceRangeSlider

https://user-images.githubusercontent.com/103095958/192442814-04033bf7-c0f2-4996-a82d-d02930a34790.mov



## Installation

1.ADD  
 npm :npm install --save rn-range-slider.  
 yarn: yarn add rn-range-slider

 Linking:
  For newer React native versions ( >= 0.60 )
   you need to install pods for.  
    iOS: cd ios && pod install && cd ..   
     For android :nothing do anything

   
 
 
 ## Price Range Props
| Props             | Type                         | Description                            |
| ----------------- | ---------------------------- | --------------------------- 
| min |number|(min) is for give minimum range of slider|
| max |number|(max) is for give maximum range of slider|
| renderThumb|ReactNode| is used for render thumb it takes name 'high' and 'low'|
| renderRail|ReactNode| is used for render the "rail" for thumbs Rendered component should have flex: 1 style so it won't fill up the whole space|
| renderRailselected|ReactNode|is used for render the selected part of "rail" for thumbs.Rendered component should not have flex: 1 style so it fills up the whole space|
| renderLabel|ReactNode|Should render label above thumbs If no function is passed, no label will be drawn|
| renderNotch|ReactNode|Should render the notch below the label,Classic notch is a small triangle below the label|
| handleValueChange|function|Will be called when a value was changed|
| floatingLabel|boolean| floatingLabel If set to true, labels will not take space in component tree|
| disableRange|boolean| is used for one side sliding|
| disabled|boolean| is used for disabled the thumb movement|
| step|number|is used for step jump|
| onSliderTouchEnd|function|Will be called when user end interaction with slider|
| onSliderTouchStart|function|will be calld when user start interaction with slider|
| onValueChanged|function|Will be called when a value was changed|
| minRange|number|is used for Minimum range of thumbs allowed to be selected by the user|
| stylethumbHigh|StyleProp<ViewProps>|this is the styling props of renderThumb of high|
| name | string| this is props name whose take string 'high' and 'low'
| stylethumbLow| StyleProp<ViewProps>|this is the styling props of renderThumb of low|
| railStyle| StyleProp<ViewProps>| this is the styling props of rail|
| railselectedStyle|StyleProp<ViewProps>|this is the styling props of selectedRail|
| notchStyle| StyleProp<ViewProps>|this is the props of notch styling|
| labelStyle |StyleProp<ViewProps>| this is the label props for styling|
| text| string|it takes the value of the label|



 
