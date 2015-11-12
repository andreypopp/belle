import Separator from '../components/Separator';

let ThemedSeparator = Separator.style({
  Root: {
    boxSizing: 'border-box',
    color: '#666',
    fontWeight: 'bold',
    padding: 10,
  }
});

ThemedSeparator._isBelleSeparator = true;

export default ThemedSeparator;
