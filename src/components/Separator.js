import React, {Component, PropTypes} from 'react';
import {omit} from '../utils/helpers';
import style from '../style/separator';

/**
 * Returns an object with properties that are relevant for the wrapping div.
 */
function sanitizeChildProps(properties) {
  return omit(properties, ['style']);
}

/**
 * Separator component.
 *
 * This component should be used together with Belle's Select.
 */
export default class Separator extends Component {

  constructor(properties) {
    super(properties);
    this.state = {
      childProps: sanitizeChildProps(properties),
    };
  }

  static displayName = 'Separator';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    style: PropTypes.object,
  };

  /**
   * Update the childProperties based on the updated properties passed to the
   * Separator.
   */
  componentWillReceiveProps(properties) {
    this.setState({ childProps: sanitizeChildProps(properties) });
  }

  render() {
    const computedStyle = {
      ...style.style,
      ...this.props.style,
    };

    return (
      <div style={ computedStyle } {...this.state.childProps}>
        { this.props.children }
      </div>
    );
  }
}
