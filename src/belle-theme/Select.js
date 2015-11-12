import Select from '../components/Select';

export default Select.style({

  Root: {
    outline: 0, // to avoid default focus behaviour
    boxSizing: 'border-box',
    position: 'relative',
  },

  Selected: {
    borderBottom: '1px solid #CCC',
    boxSizing: 'border-box',
    cursor: 'pointer',
    /*
    While the Select should have the same padding as TextInput 4px for
    paddingBottom was chosen as in Chrome the Text is larger by 1px than in
    the textarea.
     */
    padding: '7px 0 4px 0',
    position: 'relative',

    /* animations */
    transition: 'border-bottom 0.2s',
    transitionTimingFunction: 'ease-out',

    /*
    To avoid any kind of flickering the user won't get feedback
    for selecting the button text
    */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
    Prevent flickering while tapping on WebKit
    http://stackoverflow.com/a/3516243/837709
    */
    WebkitTapHighlightColor: 'transparent',

    hover: {
      borderBottom: '1px solid #92D6EF',
    },

    focus: {
      borderBottom: '1px solid #6EB8D4',
    },

    active: {
      borderBottom: '1px solid #6EB8D4',
    },

    disabled: {
      borderBottom: '1px dotted #9F9F9F',
    },

    disabledHover: {
      borderBottom: '1px dotted #92D6EF',
      cursor: 'not-allowed',
    },
  },

  Caret: {
    height: 0,
    width: 0,
    content: ' ',
    position: 'absolute',
    top: 15,
    right: 8,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',

    open: {
      borderBottom: '6px solid #666',
    },

    close: {
      borderTop: '6px solid #666',
    },

    disabled: {
      borderTop: '6px solid #9F9F9F',
    },
  },

  Menu: {
    display: 'block',
    listStyleType: 'none',
    background: '#FFF',
    padding: '6px 0',
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 10000,
    boxSizing: 'border-box',
    borderRadius: 2,
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
    borderTop: '1px solid #f2f2f2',
    top: 0,
    /* Improve scrolling for mobile Safari */
    WebkitOverflowScrolling: 'touch',
  }
});
