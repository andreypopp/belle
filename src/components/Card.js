import React, {Component, PropTypes} from 'react';
import {attachStylesheet} from 'react-stylesheet';

let Stylesheet = {
  Root: 'div'
};

/**
 * Card component with a light shadow.
 *
 * This component will apply any attribute to the div that has been provided as
 * property & is valid for a div.
 */
@attachStylesheet(Stylesheet)
export default class Card extends Component {

  static displayName = 'Card';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    style: PropTypes.object,
  };

  render() {
    const {stylesheet: {Root}, ...props} = this.props;
    return <Root {...props} />;
  }
}
