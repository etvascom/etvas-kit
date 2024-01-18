"use strict";(self.webpackChunk_etvas_etvaskit=self.webpackChunk_etvas_etvaskit||[]).push([[935],{"./stories/Dropdown.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,HugeCollection:()=>HugeCollection,Multiple:()=>Multiple,MultipleSearch:()=>MultipleSearch,ObjectAsValues:()=>ObjectAsValues,Simple:()=>Simple,TintedDropdown:()=>TintedDropdown,UsingHeadings:()=>UsingHeadings,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Demo/Dropdown",component:_src__WEBPACK_IMPORTED_MODULE_1__.Lt},DummySpace=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"200px",position:"relative"},children:"This is just a dummy text"});DummySpace.displayName="DummySpace";const Simple=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"Select a family",valueRender:value=>"".concat(value.substr(0,1).toUpperCase()).concat(value.substr(1)),onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non est repudiandae quia in culpa beatae iure dolores voluptate accusamus fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere. Omnis voluptatem consectetur exercitationem. Error nemo illum inventore totam.",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non est repudiandae quia in culpa beatae iure dolores voluptate accusamus fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere. Omnis voluptatem consectetur exercitationem. Error nemo illum inventore totam."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"tyrell",children:"Tyrell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"arryn",children:"Arryn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"targaryen",children:"Targaryen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"martell",children:"Martell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"baratheon",children:"Baratheon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})},Multiple=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,multiple:!0,label:"Select more than one...",valueRender:value=>value.join(", "),onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Lannister",children:"Lannister"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Tyrell",children:"Tyrell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Arryn",children:"Arryn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Targaryen",children:"Targaryen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Martell",children:"Martell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Baratheon",children:"Baratheon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})},TintedDropdown=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Zb,{width:"304px",height:"504px",variant:"tinted",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,multiple:!0,tinted:!0,label:"Select more than one...",valueRender:value=>value.join(", "),onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Lannister",children:"Lannister"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Tyrell",children:"Tyrell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Arryn",children:"Arryn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Targaryen",children:"Targaryen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Martell",children:"Martell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"Baratheon",children:"Baratheon"})]})})};TintedDropdown.displayName="TintedDropdown";const UsingHeadings=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"Select your character",valueRender:value=>"".concat(value.substr(0,1).toUpperCase()).concat(value.substr(1)),onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Heading,{children:"Good guys"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"yoda",children:"Yoda"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"anakin",children:"Luke Skywalker"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Heading,{children:"Bad guys"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"vader",children:"Vader"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"ventress",children:"Ventress"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})},ObjectAsValues=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"Select a house and get a family",valueRender:value=>value.label,itemSelected:(value,item)=>(null==value?void 0:value.id)===item.id,onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"lannister",label:"Lannister"},children:"House of Lannister"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"tyrell",label:"Tyrell"},children:"House of Tyrell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"arryn",label:"Arynn"},children:"House of Arryn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"targaryen",label:"Targaryen"},children:"House of Targaryen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"martell",label:"Martell"},children:"House of Martell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:{id:"baratheon",label:"Baratheon"},children:"House of Baratheon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})},Disabled=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("baratheon");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"Cannot select a different value",disabled:!0,valueRender:value=>"".concat(value.substr(0,1).toUpperCase()).concat(value.substr(1)),onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"lannister",children:"Lannister"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"tyrell",children:"Tyrell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"arryn",children:"Arryn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"targaryen",children:"Targaryen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"martell",children:"Martell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:"baratheon",children:"Baratheon"})]})};Disabled.displayName="Disabled";const HugeCollection=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),items=[];for(let i=0;i<1e3;i++)items.push({id:"key-".concat(i),label:"Item number ".concat(i)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"You can search for 9...",itemSelected:(value,item)=>(null==value?void 0:value.id)===item.id,valueRender:value=>value.label,onChange:setSelected,children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:item,children:item.label},item.id)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})},MultipleSearch=()=>{const[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),items=[];for(let i=0;i<1e3;i++)items.push({id:"key-".concat(i),label:"Item number ".concat(i),value:"Item value ${i}"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt,{value:selected,label:"You can search for ...",multiple:!0,itemSelected:(values,item)=>!!values.find((value=>value.id===item.id)),valueRender:values=>values.map((value=>value.label)).join(", "),onChange:setSelected,children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Lt.Option,{value:item,children:item.label},item.id)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DummySpace,{})]})};Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState(null);\n  return <>\n      <Dropdown value={selected} label='Select a family' valueRender={value => `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`} onChange={setSelected}>\n        <Dropdown.Option value='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non est repudiandae quia in culpa beatae iure dolores voluptate accusamus fuga at eaque, nostrum placeat debitis incidunt sit perferendis facere. Omnis voluptatem consectetur exercitationem. Error nemo illum inventore totam.'>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui non\n          est repudiandae quia in culpa beatae iure dolores voluptate accusamus\n          fuga at eaque, nostrum placeat debitis incidunt sit perferendis\n          facere. Omnis voluptatem consectetur exercitationem. Error nemo illum\n          inventore totam.\n        </Dropdown.Option>\n        <Dropdown.Option value='tyrell'>Tyrell</Dropdown.Option>\n        <Dropdown.Option value='arryn'>Arryn</Dropdown.Option>\n        <Dropdown.Option value='targaryen'>Targaryen</Dropdown.Option>\n        <Dropdown.Option value='martell'>Martell</Dropdown.Option>\n        <Dropdown.Option value='baratheon'>Baratheon</Dropdown.Option>\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...Simple.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState([]);\n  const valueRender = value => value.join(', ');\n  return <>\n      <Dropdown value={selected} multiple label='Select more than one...' valueRender={valueRender} onChange={setSelected}>\n        <Dropdown.Option value='Lannister'>Lannister</Dropdown.Option>\n        <Dropdown.Option value='Tyrell'>Tyrell</Dropdown.Option>\n        <Dropdown.Option value='Arryn'>Arryn</Dropdown.Option>\n        <Dropdown.Option value='Targaryen'>Targaryen</Dropdown.Option>\n        <Dropdown.Option value='Martell'>Martell</Dropdown.Option>\n        <Dropdown.Option value='Baratheon'>Baratheon</Dropdown.Option>\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...Multiple.parameters?.docs?.source}}},TintedDropdown.parameters={...TintedDropdown.parameters,docs:{...TintedDropdown.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState([]);\n  const valueRender = value => value.join(', ');\n  return <Card width='304px' height='504px' variant='tinted'>\n      <Dropdown value={selected} multiple tinted label='Select more than one...' valueRender={valueRender} onChange={setSelected}>\n        <Dropdown.Option value='Lannister'>Lannister</Dropdown.Option>\n        <Dropdown.Option value='Tyrell'>Tyrell</Dropdown.Option>\n        <Dropdown.Option value='Arryn'>Arryn</Dropdown.Option>\n        <Dropdown.Option value='Targaryen'>Targaryen</Dropdown.Option>\n        <Dropdown.Option value='Martell'>Martell</Dropdown.Option>\n        <Dropdown.Option value='Baratheon'>Baratheon</Dropdown.Option>\n      </Dropdown>\n    </Card>;\n}",...TintedDropdown.parameters?.docs?.source}}},UsingHeadings.parameters={...UsingHeadings.parameters,docs:{...UsingHeadings.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState(null);\n  return <>\n      <Dropdown value={selected} label='Select your character' valueRender={value => `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`} onChange={setSelected}>\n        <Dropdown.Heading>Good guys</Dropdown.Heading>\n        <Dropdown.Option value='yoda'>Yoda</Dropdown.Option>\n        <Dropdown.Option value='anakin'>Luke Skywalker</Dropdown.Option>\n        <Dropdown.Heading>Bad guys</Dropdown.Heading>\n        <Dropdown.Option value='vader'>Vader</Dropdown.Option>\n        <Dropdown.Option value='ventress'>Ventress</Dropdown.Option>\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...UsingHeadings.parameters?.docs?.source}}},ObjectAsValues.parameters={...ObjectAsValues.parameters,docs:{...ObjectAsValues.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState(null);\n  const itemSelected = (value, item) => value?.id === item.id;\n  return <>\n      <Dropdown value={selected} label='Select a house and get a family' valueRender={value => value.label} itemSelected={itemSelected} onChange={setSelected}>\n        <Dropdown.Option value={{\n        id: 'lannister',\n        label: 'Lannister'\n      }}>\n          House of Lannister\n        </Dropdown.Option>\n        <Dropdown.Option value={{\n        id: 'tyrell',\n        label: 'Tyrell'\n      }}>\n          House of Tyrell\n        </Dropdown.Option>\n        <Dropdown.Option value={{\n        id: 'arryn',\n        label: 'Arynn'\n      }}>\n          House of Arryn\n        </Dropdown.Option>\n        <Dropdown.Option value={{\n        id: 'targaryen',\n        label: 'Targaryen'\n      }}>\n          House of Targaryen\n        </Dropdown.Option>\n        <Dropdown.Option value={{\n        id: 'martell',\n        label: 'Martell'\n      }}>\n          House of Martell\n        </Dropdown.Option>\n        <Dropdown.Option value={{\n        id: 'baratheon',\n        label: 'Baratheon'\n      }}>\n          House of Baratheon\n        </Dropdown.Option>\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...ObjectAsValues.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState('baratheon');\n  return <Dropdown value={selected} label='Cannot select a different value' disabled valueRender={value => `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`} onChange={setSelected}>\n      <Dropdown.Option value='lannister'>Lannister</Dropdown.Option>\n      <Dropdown.Option value='tyrell'>Tyrell</Dropdown.Option>\n      <Dropdown.Option value='arryn'>Arryn</Dropdown.Option>\n      <Dropdown.Option value='targaryen'>Targaryen</Dropdown.Option>\n      <Dropdown.Option value='martell'>Martell</Dropdown.Option>\n      <Dropdown.Option value='baratheon'>Baratheon</Dropdown.Option>\n    </Dropdown>;\n}",...Disabled.parameters?.docs?.source}}},HugeCollection.parameters={...HugeCollection.parameters,docs:{...HugeCollection.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState(null);\n  const itemSelected = (value, item) => value?.id === item.id;\n  const valueRender = value => value.label;\n  const items = [];\n  for (let i = 0; i < 1000; i++) {\n    items.push({\n      id: `key-${i}`,\n      label: `Item number ${i}`\n    });\n  }\n  return <>\n      <Dropdown value={selected} label='You can search for 9...' itemSelected={itemSelected} valueRender={valueRender} onChange={setSelected}>\n        {items.map(item => <Dropdown.Option key={item.id} value={item}>\n            {item.label}\n          </Dropdown.Option>)}\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...HugeCollection.parameters?.docs?.source}}},MultipleSearch.parameters={...MultipleSearch.parameters,docs:{...MultipleSearch.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState([]);\n  const itemSelected = (values, item) => !!values.find(value => value.id === item.id);\n  const valueRender = values => values.map(value => value.label).join(', ');\n  const items = [];\n  for (let i = 0; i < 1000; i++) {\n    items.push({\n      id: `key-${i}`,\n      label: `Item number ${i}`,\n      value: 'Item value ${i}'\n    });\n  }\n  return <>\n      <Dropdown value={selected} label='You can search for ...' multiple itemSelected={itemSelected} valueRender={valueRender} onChange={setSelected}>\n        {items.map(item => <Dropdown.Option key={item.id} value={item}>\n            {item.label}\n          </Dropdown.Option>)}\n      </Dropdown>\n      <DummySpace />\n    </>;\n}",...MultipleSearch.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","Multiple","TintedDropdown","UsingHeadings","ObjectAsValues","Disabled","HugeCollection","MultipleSearch"]}}]);