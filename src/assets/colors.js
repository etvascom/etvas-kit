export default {
  accent: 'rgb(var(--etvas-accent-color))',
  brand: process.env.STORYBOOK_PRESENT
    ? '#0040E3'
    : 'rgb(var(--etvas-brand-color))',
  brandHover: process.env.STORYBOOK_PRESENT
    ? '#002B99'
    : 'rgb(var(--etvas-brand-hover-color))',
  brandPressed: process.env.STORYBOOK_PRESENT
    ? '#00154D'
    : 'rgb(var(--etvas-brand-pressed-color))',
  brandDisabled: process.env.STORYBOOK_PRESENT
    ? '#A1A7B6'
    : 'rgb(var(--etvas-brand-disabled-color))',
  brandFade: 'rgba(var(--etvas-brand-color), .3)',
  accentFade: 'rgba(var(--etvas-accent-color), .3)',
  text: 'rgb(var(--etvas-text-color))',
  lighterText: 'rgb(var(--etvas-lighter-text-color))',
  error: '#FF0000',
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
  transparent: 'transparent'
}
