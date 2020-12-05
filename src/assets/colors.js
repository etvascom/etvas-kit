export default {
  accent: 'rgb(var(--etvas-accent-color))',
  brand: process.env.STORYBOOK_PRESENT
    ? '#0040E3'
    : 'rgb(var(--etvas-brand-color))',
  brandLight: process.env.STORYBOOK_PRESENT
    ? '#5585FF'
    : 'rgb(var(--etvas-brand-color-light))',
  brandFade: 'rgba(var(--etvas-brand-color), .3)',
  accentFade: 'rgba(var(--etvas-accent-color), .3)',
  text: 'rgb(var(--etvas-text-color))',
  lighterText: 'rgb(var(--etvas-lighter-text-color))',
  error: '#F72A2A',
  warning: '#F7D935',
  disabled: '#BABABC',
  divider: '#F2F2F2',
  outline: '#A0AAB2',
  lighterOutline: '#D4DEE8',
  background: '#FBFDFF',
  widgetBackground: '#F7FAFC',
  modalStroke: '#D4DEE8',
  skeleton: '#E4EBF0',
  dropShadow: 'rgba(19, 51, 77, .3)',
  white: '#FFFFFF',
  whiteShadow: 'rgba(255, 255, 255, .75)',
  dark: '#343434',
  positive: '#27ae60',
  positiveFade: '#87e8af',
  transparent: 'transparent',
  backgroundLightGray: '#FEFEFE',
  inputGray: '#D8DDE8',
  backgroundGray: '#F1F4F8',
  textDefault: '#536083'
}
