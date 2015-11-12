import React, {Component, PropTypes} from 'react';
import {attachStylesheet} from 'react-stylesheet';
import {omit} from '../utils/helpers';

/**
 * Returns an object with properties that are relevant for the wrapping div.
 */
function sanitizeChildProps(properties) {
  return omit(properties, [
    'style',
    'hoverStyle',
    'selectStyle',
    'disabledSelectStyle',
    'value',
    '_isDisplayedAsSelected',
  ]);
}

let Stylesheet = {
  Root: 'div'
};

/**
 * Option component.
 *
 * This component should be used together with Belle's Select.
 */
@attachStylesheet(Stylesheet)
export default class Option extends Component {

  constructor(properties) {
    super(properties);
    this.state = {
      childProps: sanitizeChildProps(properties),
    };
  }

  static _isBelleOption = true;

  static displayName = 'Option';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    style: PropTypes.object,
    hoverStyle: PropTypes.object,
    selectStyle: PropTypes.object,
    disabledSelectStyle: PropTypes.object,
    _isDisplayedAsSelected: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  static contextTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isHoveredValue: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    _isDisplayedAsSelected: false,
  };

  /**
   * Update the childProps based on the updated properties passed to the
   * Option.
   */
  componentWillReceiveProps(properties) {
    this.setState({ childProps: sanitizeChildProps(properties) });
  }

  render() {
    let {Root} = this.props.stylesheet;
    let rootUIState = {
      notSelectedHover: !this.props._isDisplayedAsSelected && this.context.isHoveredValue === this.props.value,
      selected: this.props._isDisplayedAsSelected,
      selectedDisabled: this.props._isDisplayedAsSelected && this.context.isDisabled
    };
    return (
      <Root data-belle-value={ this.props.value }
            state={ rootUIState }
            {...this.state.childProps}>
        { this.props.children }
      </Root>
    );
  }
}

export function isOption(element) {
  return element && element.type && element.type._isBelleOption;
}
