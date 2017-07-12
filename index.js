/**
 * Scroll to Top
 *
 * <ScrollToTop
            rootView={this.listview}
            icon={<Icon raised name="arrow-upward" />}
          />
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions, StyleSheet, Text } from 'react-native';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  Top: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* Component ==================================================================== */
class ScrollToTop extends Component {
  static propTypes = {
    isRadius: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    borderRadius: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    icon: PropTypes.element,
    text: PropTypes.string,
    rootView: PropTypes.objectOf(PropTypes.shape).isRequired,
    ListView: PropTypes.bool
  };

  static defaultProps = {
    isRadius: true,
    width: 60,
    height: 60,
    left: Dimensions.get('window').width - 80,
    top: Dimensions.get('window').height - 170,
    borderRadius: 30,
    backgroundColor: null,
    color: '#ffffff',
    fontSize: 12,
    icon: null,
    text: 'Scroll to Top',
    ListView: false,
  };

  onPress() {
    if(this.props.ListView) this.props.rootView.scrollTo({ x: 0, y: 0, animated: true });
    else this.props.rootView.scrollToOffset({offset: 0, animated: true}); 
  }

  getBackgroundColor = () => {
    if (this.props.backgroundColor) {
      return this.props.backgroundColor;
    }
    if (this.props.text && !this.props.icon) {
      return '#546e7a';
    }
    return null;
  };

  render = () => (
    <TouchableOpacity
      onPress={() => this.onPress()}
      style={[
        styles.Top,
        {
          borderRadius: this.props.isRadius ? this.props.borderRadius : 0,
          backgroundColor: this.getBackgroundColor(),
          width: this.props.width,
          height: this.props.height,
          left: this.props.left,
          top: Dimensions.get('window').height - this.props.top,
        },
      ]}
    >

      {this.props.icon
        ? { ...this.props.icon }
        : <Text
          style={{
            color: this.props.color,
            fontSize: this.props.fontSize,
            textAlign: 'center',
          }}
        >
          {this.props.text}
        </Text>}

    </TouchableOpacity>
  );
}

ScrollToTop.componentName = 'ScrollToTop';

/* Export Component ==================================================================== */
export default ScrollToTop;
