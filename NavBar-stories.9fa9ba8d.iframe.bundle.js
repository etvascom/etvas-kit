"use strict";(self.webpackChunk_etvas_etvaskit=self.webpackChunk_etvas_etvaskit||[]).push([[71],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_OPEUWD42.aD}});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./stories/NavBar.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SimpleNavBar:function(){return SimpleNavBar},__namedExportsOrder:function(){return __namedExportsOrder}});var _SimpleNavBar$paramet,_SimpleNavBar$paramet2,_SimpleNavBar$paramet3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Demo/NavBar",component:_src__WEBPACK_IMPORTED_MODULE_2__.l2};var SimpleNavBar=function SimpleNavBar(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("overview"),2),activeItem=_useState2[0],setActiveItem=_useState2[1],setAction=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(name){setActiveItem(name),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)(name)}),[setActiveItem]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.kC,{flexDirection:"column",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.l2,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.l2.Item,{as:"a",icon:"eye",label:"Overview",isActive:"overview"===activeItem,onClick:function onClick(){return setAction("overview")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.l2.Item,{as:"a",icon:"alertOctagon",label:"VeryLongItemNameWithoutSpace",isActive:"long"===activeItem,onClick:function onClick(){return setAction("long")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.l2.Item,{as:"a",icon:"rocket",label:"Space",isActive:"shopping"===activeItem,onClick:function onClick(){return setAction("shopping")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.l2.Item,{as:"a",icon:"cart",label:"Shopping Is Fun",isActive:"cart"===activeItem,onClick:function onClick(){return setAction("cart")}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.xu,{p:4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Qr,{lines:2,mb:4}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.OG,{height:"300px",width:"100%",mb:4}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Qr,{lines:5,mb:4})]})]})};SimpleNavBar.displayName="SimpleNavBar",SimpleNavBar.parameters=_objectSpread(_objectSpread({},SimpleNavBar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SimpleNavBar$paramet=SimpleNavBar.parameters)||void 0===_SimpleNavBar$paramet?void 0:_SimpleNavBar$paramet.docs),{},{source:_objectSpread({originalSource:"() => {\n  const [activeItem, setActiveItem] = useState('overview');\n  const setAction = useCallback(name => {\n    setActiveItem(name);\n    action(name);\n  }, [setActiveItem]);\n  return <Flex flexDirection='column'>\n      <NavBar>\n        <NavBar.Item as='a' icon='eye' label='Overview' isActive={activeItem === 'overview'} onClick={() => setAction('overview')} />\n        <NavBar.Item as='a' icon='alertOctagon' label='VeryLongItemNameWithoutSpace' isActive={activeItem === 'long'} onClick={() => setAction('long')} />\n        <NavBar.Item as='a' icon='rocket' label='Space' isActive={activeItem === 'shopping'} onClick={() => setAction('shopping')} />\n        <NavBar.Item as='a' icon='cart' label='Shopping Is Fun' isActive={activeItem === 'cart'} onClick={() => setAction('cart')} />\n      </NavBar>\n      <Box p={4}>\n        <TextSkeleton lines={2} mb={4} />\n        <BlockSkeleton height='300px' width='100%' mb={4} />\n        <TextSkeleton lines={5} mb={4} />\n      </Box>\n    </Flex>;\n}"},null===(_SimpleNavBar$paramet2=SimpleNavBar.parameters)||void 0===_SimpleNavBar$paramet2||null===(_SimpleNavBar$paramet3=_SimpleNavBar$paramet2.docs)||void 0===_SimpleNavBar$paramet3?void 0:_SimpleNavBar$paramet3.source)})});var __namedExportsOrder=["SimpleNavBar"];SimpleNavBar.__docgenInfo={description:"",methods:[],displayName:"SimpleNavBar"}}}]);