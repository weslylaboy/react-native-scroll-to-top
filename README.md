# react-native-scroll-to-top
A React Native component to scroll back to top

![preview](/docs/scrollToTop.gif)

## Installation

- `npm install react-native-scroll-to-top --save`
- `import ScrollToTop from 'react-native-scroll-to-top'`
 or `var ScrollToTop = require('react-native-scroll-to-top')`

 ## Available Props

 Property	|	Type		|	Default		|	Description |
:---------|:--------|:----------|:------------|
rootView	|	object	|		|	This prop is required. You must pass a ref of the root view. This will be used to scroll to the top.
ListView | bool | `false` | `true` if your List is a `ListView`, `false` if your List is a `FlatList`.
backgroundColor | string | `null` | Background color of the view
borderRadius | number | 30 | Border radius for the view
color | string | `#ffffff` | Color of the view
fontSize	|	number	|	12	|	Font size of Text element
icon	|	element	|	`null`	|	Icon button
isRadius	|	bool	|	true	|	If the view is a round view
left | number | `Dimensions.get('window').width - 80` |  Number of logical pixels to offset the left edge of this component.
text	|	string	|	`Scroll to Top`	|	If icon is null. This props will be displayed.
top | number | `Dimensions.get('window').width - 170` |  Number of logical pixels to offset the top edge of this component.
width	|	number	|	60	|	Width of the view

## Example

```
import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import ScrollToTop from 'react-native-scroll-to-top'

class ScrollToTop extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 
      'row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2'
      ]),
    };
  }

  render() {
    return (
      <View>
      <ListView
        ref={(listview) => {
            this.listview = listview;
          }}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}
      />
      <ScrollToTop
          ListView
          rootView={this.listview}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
     paddingVertical: 15,
     alignSelf: 'center',
     color: '#4f603c'
   }
})

export default ScrollToTop;

```