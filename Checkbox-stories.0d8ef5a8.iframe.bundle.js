"use strict";(self.webpackChunk_etvas_etvaskit=self.webpackChunk_etvas_etvaskit||[]).push([[878],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./stories/Checkbox.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledCheckedState:()=>DisabledCheckedState,DisabledState:()=>DisabledState,PresetState:()=>PresetState,SimpleCheckbox:()=>SimpleCheckbox,WithLabel:()=>WithLabel,WrappedLabel:()=>WrappedLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Demo/Checkbox",component:_src__WEBPACK_IMPORTED_MODULE_1__.XZ},SimpleCheckbox=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")});SimpleCheckbox.displayName="SimpleCheckbox";const WithLabel=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{label:"Free pizza",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")});WithLabel.displayName="WithLabel";const PresetState=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{checked:!0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")});PresetState.displayName="PresetState";const DisabledState=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{label:"Free pizza",disabled:!0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")});DisabledState.displayName="DisabledState";const DisabledCheckedState=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{label:"Free pizza",disabled:!0,checked:!0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")});DisabledCheckedState.displayName="DisabledCheckedState";const WrappedLabel=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.xu,{width:"250px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.XZ,{size:"large",label:"Quisque vitae nisi id massa consectetur feugiat at ac orci. Aliquam volutpat urna in felis maximus viverra. Curabitur congue nunc eros, eu hendrerit nisl sodales sed. Donec ultrices ut lectus at gravida. Nunc id tincidunt nisl. Fusce maximus sapien vel neque ullamcorper scelerisque. Suspendisse potenti. Proin ut lacus nisi. Proin vehicula pharetra massa nec consectetur.",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("checkbox-change")})});WrappedLabel.displayName="WrappedLabel",SimpleCheckbox.parameters={...SimpleCheckbox.parameters,docs:{...SimpleCheckbox.parameters?.docs,source:{originalSource:"() => <Checkbox onChange={action('checkbox-change')} />",...SimpleCheckbox.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"() => <Checkbox label='Free pizza' onChange={action('checkbox-change')} />",...WithLabel.parameters?.docs?.source}}},PresetState.parameters={...PresetState.parameters,docs:{...PresetState.parameters?.docs,source:{originalSource:"() => <Checkbox checked onChange={action('checkbox-change')} />",...PresetState.parameters?.docs?.source}}},DisabledState.parameters={...DisabledState.parameters,docs:{...DisabledState.parameters?.docs,source:{originalSource:"() => <Checkbox label='Free pizza' disabled onChange={action('checkbox-change')} />",...DisabledState.parameters?.docs?.source}}},DisabledCheckedState.parameters={...DisabledCheckedState.parameters,docs:{...DisabledCheckedState.parameters?.docs,source:{originalSource:"() => <Checkbox label='Free pizza' disabled checked onChange={action('checkbox-change')} />",...DisabledCheckedState.parameters?.docs?.source}}},WrappedLabel.parameters={...WrappedLabel.parameters,docs:{...WrappedLabel.parameters?.docs,source:{originalSource:"() => <Box width='250px'>\n    <Checkbox size='large' label='Quisque vitae nisi id massa consectetur feugiat at ac orci. Aliquam volutpat urna in felis maximus viverra. Curabitur congue nunc eros, eu hendrerit nisl sodales sed. Donec ultrices ut lectus at gravida. Nunc id tincidunt nisl. Fusce maximus sapien vel neque ullamcorper scelerisque. Suspendisse potenti. Proin ut lacus nisi. Proin vehicula pharetra massa nec consectetur.' onChange={action('checkbox-change')} />\n  </Box>",...WrappedLabel.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleCheckbox","WithLabel","PresetState","DisabledState","DisabledCheckedState","WrappedLabel"]}}]);