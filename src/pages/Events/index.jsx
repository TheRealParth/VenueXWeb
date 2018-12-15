import { connect } from 'react-redux';
import { Events } from './Events';

const mapStateToProps = state => {
  console.log(state)
  return {
    eventsByDate: {},
    allEvents: []
  };
};

export default connect(mapStateToProps)(Events);
