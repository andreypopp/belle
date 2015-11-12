import React, {Component, PropTypes} from 'react';
import {attachStylesheet} from 'react-stylesheet';
import {omit} from '../utils/helpers';

let Stylesheet = {
  Root: 'div'
};

/**
 * Separator component.
 *
 * This component should be used together with Belle's Select.
 */
@attachStylesheet(Stylesheet)
export default class Separator extends Component {

  static displayName = 'Separator';

  static _isBelleSeparator = true;

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    style: PropTypes.object,
  };

  render() {
    let {stylesheet: {Root}, ...props} = this.props;
    return <Root {...props} />
  }
}

export function isSeparator(element) {
  return element && element.type && element.type._isBelleSeparator;
}
