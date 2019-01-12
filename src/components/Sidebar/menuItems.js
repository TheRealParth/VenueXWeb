import calendarWhiteIcon from '../../assets/calendar-white.svg';
import peopleWhiteIcon from '../../assets/people-white.svg';
import billingWhiteIcon from '../../assets/bill-white.svg';

const menuItems = [
  {
    id: 'events',
    route: '/events',
    label: 'Events overview',
    icon: calendarWhiteIcon
  },
  {
    id: 'manageStaff',
    route: '/managestaff',
    label: 'Manage Staff',
    icon: peopleWhiteIcon
  },
  {
    id: 'billing',
    route: '/billing',
    label: 'Billing',
    icon: billingWhiteIcon
  }
];

export default menuItems;
