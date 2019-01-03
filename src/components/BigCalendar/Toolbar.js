import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { navigate } from './utils/constants';
import CaretLeft from '../../assets/icons/CaretLeft';
import CaretRight from '../../assets/icons/CaretRight';
class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    localizer: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired
  };

  render() {
    let {
      localizer: { messages },
      label
    } = this.props;

    return (
      <div className="rbc-toolbar">
        <button
          type="button"
          className="today-button"
          onClick={this.navigate.bind(null, navigate.TODAY)}
        >
          {messages.today}
        </button>
        <div className="rbc-btn-group">
          <button
            type="button"
            className={'rbc-btn-navi-left'}
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <CaretLeft height={25} color="#c0b69b" />
          </button>

          <div className="rbc-toolbar-label">{label}</div>

          <button
            type="button"
            className={'rbc-btn-navi-right'}
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <CaretRight height={25} color="#c0b69b" />
          </button>
        </div>
        <div>Button Group</div>

        {/* <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span> */}
      </div>
    );
  }

  navigate = action => {
    this.props.onNavigate(action);
  };

  view = view => {
    this.props.onView(view);
  };

  viewNamesGroup(messages) {
    let viewNames = this.props.views;
    const view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={cn({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ));
    }
  }
}

export default Toolbar;
