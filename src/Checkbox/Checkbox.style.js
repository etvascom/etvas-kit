// import { _border } from '../utils'

// export default {
//   justifyContent: 'flex-start',
//   alignItems: 'flex-start',
//   '> em': {
//     flex: `0 0 24px`,
//     height: '24px',
//     border: _border(2, 'accent'),
//     borderRadius: '2px'
//   },
//   '> b': {
//     backgroundColor: 'accent',
//     flex: `0 0 24px`,
//     height: '24px',
//     borderRadius: '2px',
//     '.material-icons': {
//       color: 'white'
//     }
//   },
//   '> span': {
//     flexGrow: '999',
//     marginLeft: '.5rem',
//     fontSize: '.75rem',
//     color: 'dark',
//     a: {
//       color: 'dark',
//       textDecoration: 'underline'
//     }
//   }
// }

export default {
  '> input[type="checkbox"]': {
    display: 'none'
  },

  '> label:nth-of-type(1)': {
    cursor: 'pointer',
    height: '20px',
    width: '20px',
    'border-radius': '4px',
    'background-color': '#ffffff',
    border: '1px solid red',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    '& > *': {
      'user-select': 'none',
      opacity: '0'
    }
  },
  '> label:nth-of-type(2)': {
    cursor: 'pointer'
  },

  //   I've added 1.6 because I see that behaves really nice when you want to put text instead of an icon
  '> input[type="checkbox"]:checked + label > *': {
    opacity: '1',
    'line-height': '1.6'
  }
}
