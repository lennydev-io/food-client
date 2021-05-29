
import Typography from 'typography';

const DefaultTypography = new Typography({
  title: 'Default Typography',
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400'],
    }
  ],
});

export default DefaultTypography;
