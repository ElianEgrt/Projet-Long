const colors = {
  primaryColor: '#c3cbd6',
  secondaryColor: '#748b6f',
  backgroundColor: '#2a403d',
  accentColor: '#d05663',
  textColor: '#777',
};

const metrics = {
  extraSmallSize: '0.5em',
  smallSize: '0.7em',
  mediumSize: '1em',
  largeSize: '2em',
  extraLargeSize: '3em'
}

export default { colors, metrics };

type color = typeof colors;
type metric = typeof metrics;

export interface ThemeStyle {
  colors: color;
  metrics: metric;
}
