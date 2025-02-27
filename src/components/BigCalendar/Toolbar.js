import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { navigate } from './utils/constants';
import CaretLeft from '../../assets/icons/CaretLeft';
import CaretRight from '../../assets/icons/CaretRight';
import PersonalMenu from '../../components/PersonalMenu';
import AddButton from '../AddButton';
import AddEventModal from '../events/AddEventModal';

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
            <CaretLeft size={16} />
          </button>

          <div className="rbc-toolbar-label">{label}</div>

          <button
            type="button"
            className={'rbc-btn-navi-right'}
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <CaretRight size={16} />
          </button>
        </div>
        <div>
          {' '}
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <PersonalMenu {...this.props.currentUser} />
            {console.log(this.props.currentUser)}
            <AddButton onClick={this.props.openModal} />
          </div>
        </div>

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
