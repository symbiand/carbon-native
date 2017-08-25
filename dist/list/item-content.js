Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/list/item-content.js';exports.default=ItemContent;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _styles=require('../styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cs=_reactNative.StyleSheet.create(_styles.carbonStyles);var propTypes={children:_react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node),_react.PropTypes.node]),line:_react.PropTypes.bool,style:_react.PropTypes.any};var defaultProps={line:true};function ItemContent(props){var itemNoLine=!props.line;return _react2.default.createElement(_reactNative.View,_extends({},props,{style:[cs.itemContent,itemNoLine&&cs.itemNoLine,props.style],__source:{fileName:_jsxFileName,lineNumber:32}}),props.children);}ItemContent.propTypes=propTypes;ItemContent.defaultProps=defaultProps;