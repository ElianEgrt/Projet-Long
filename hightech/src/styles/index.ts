const colors = {
  primaryColor: '#c3cbd6',
  secondaryColor: '#CAE3E5',
  backgroundColor: '#2a403d',
  accentColor: '#d05663',
  textColor: '#777',
};

const metrics = {
  extraSmallSize: '0.5em',
  smallSize: '0.7em',
  mediumSize: '1em',
  largeSize: '2em',
  extraLargeSize: '3em',
  cardSize: '20em'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { colors, metrics };

type color = typeof colors;
type metric = typeof metrics;

export interface ThemeStyle {
  colors: color;
  metrics: metric;
}
