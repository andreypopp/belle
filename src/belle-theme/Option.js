import Option from '../components/Option';

let ThemedOption = Option.style({

  Root: {
    boxSizing: 'border-box',
    color: '#666',
    cursor: 'pointer',
    padding: 10,
    fontSize: 15,
    /*
    To avoid any kind of flickering the user won't get feedback
    for selecting the option text
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

    selected: {
      boxSizing: 'border-box',
      color: '#666',
      padding: 0,
      fontSize: 15,
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
    },

    selectedDisabled: {
      color: '#9F9F9F',
      padding: 0,
    },

    notSelectedHover: {
      background: '#F5F5F5',
      color: '#444',
    },

  }
});

ThemedOption._isBelleOption = true;

export default ThemedOption;
