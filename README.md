# PriceRangeSlider

https://user-images.githubusercontent.com/103095958/192442814-04033bf7-c0f2-4996-a82d-d02930a34790.mov


Installation:
  1.ADD
   npm: npm install --save rn-range-slider
   yarn: yarn add rn-range-slider

 Linking:
    For newer React native versions ( >= 0.60 ) you need to install pods for iOS:
    cd ios && pod install && cd ..
    For android same like that
    
 Properties:
  /**
 * We have to install (yarn add rn-range-slider)
 * @props (min) is for give minimum range of slider
 * @props (max) is for give maximum range of slider
 * @props (renderThumb) is used for render thumb it takes name 'high' and 'low'
 * @props (renderRail) is used for render the "rail" for thumbs Rendered component should have flex: 1 style so it won't fill up the whole space
 * @props (renderRailselected) is used for render the selected part of "rail" for thumbs.Rendered component should not have flex: 1 style so it fills up      the whole space.
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
