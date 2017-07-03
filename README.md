# react-native-scroll-to-top
A React Native component to scroll back to top

## Installation

- `npm install react-native-scroll-to-top --save`
- `import ScrollToTop from 'react-native-scroll-to-top'`
 or `var ScrollToTop = require('react-native-scroll-to-top')`

 ## Available Props

 Property	|	Type		|	Default		|	Description |
:---------|:--------|:----------|:------------|
isRadius	|	bool	|	true	|	If the view is a round view
width	|	number	|	60	|	Width of the view
left | number | `Dimensions.get('window').width - 80` |  Number of logical pixels to offset the left edge of this component.
top | number | `Dimensions.get('window').width - 160` |  Number of logical pixels to offset the top edge of this component.
borderRadius | number | 30 | Border radius for the view
backgroundColor | string | `null` | Background color of the view
color | string | `#ffffff` | Color of the view
fontSize	|	number	|	12	|	Font size of Text element
icon	|	element	|	`null`	|	Icon button
text	|	string	|	`Scroll to Top`	|	If icon is null. This props will be displayed.

## Example