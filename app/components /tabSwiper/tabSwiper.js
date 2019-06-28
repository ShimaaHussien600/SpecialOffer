import React, { Component } from 'react';
import {
  View,
  TouchableOpacity, Animated, Easing
} from 'react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { metrics } from '../../../themes';
import colors from '../../modules/colors';
import styling from './styling';

export class TabSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedTab: new Animated.Value(0),
      textColor: new Animated.Value(1),
      textColorButton2: new Animated.Value(0),
    };
  }
  render() {
    const { animatedTab, textColor, textColorButton2 } = this.state;
    const InterPolateTextColor =
      textColor.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.lightOrange, colors.darkgray]
      });
    const interPolatetextColorButton = textColorButton2.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.lightOrange, colors.darkgray]
    });
    return (
      <View style={styling.swiperConainer}>
        <View style={styling.swiperConainer}>
          <View style={styling.buttonsTab}>
            <TouchableOpacity
              onPress={() => {
                this.AnimatedTab('right');
                this.SwiperRef.scrollBy(-1);
              }}
              style={styling.button}>
              <Animated.Text
                style={[styling.textButton,
                  { color: InterPolateTextColor }]}>WEEKLY
              </Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.AnimatedTab('left');
                this.SwiperRef.scrollBy(1);
              }}
              style={styling.button}>
              <Animated.Text
                style={[styling.textButton,
                  { color: interPolatetextColorButton }]}>MONTHLY
              </Animated.Text>
            </TouchableOpacity>
          </View>
          <Animated.View style={[styling.animationLine, { left: animatedTab }]} />
        </View>
        <View style={styling.swiperContentContainer}>
          <Swiper
            loop={false}
            onIndexChanged={(index) => {
              if (index === 0) { this.AnimatedTab('right'); } else { this.AnimatedTab('left'); }
            }}
            showsPagination={false}
            ref={SwiperRef => { this.SwiperRef = SwiperRef; }}
            dot={false}
            style={styling.swiper}>
            <View style={styling.ContentSwip}>
              {/* //cart */}
              {this.props.ContentRight()}
            </View>
            <View style={styling.ContentSwip}>
              {this.props.ContentLeft()}
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
  AnimatedTab(direction) {
    const { animatedTab, textColor, textColorButton2 } = this.state;
    if (direction === 'left') {
      Animated.parallel([
        Animated.timing(animatedTab,
          { toValue: metrics.screenWidth * 0.5, duration: 700, easing: Easing.elastic() }),
        Animated.timing(textColor, { toValue: 0, duration: 700, easing: Easing.elastic() }),
        Animated.timing(textColorButton2, { toValue: 1, duration: 700, easing: Easing.elastic() })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animatedTab, { toValue: 0, duration: 700, easing: Easing.elastic() }),
        Animated.timing(textColor, { toValue: 1, duration: 700, easing: Easing.elastic() }),
        Animated.timing(textColorButton2, { toValue: 0, duration: 700, easing: Easing.elastic() })
      ]).start();
    }
  }
}