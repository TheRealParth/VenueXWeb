
export const NotEmptyValidator = value => {
  if (!value) {
    return '* Required';
  }
  return null;
};

export const OwnerSelectedValidator = value => {
  if (value && value.owner) {
    return null;
  }

  return 'Must select an owner';
};

export const DateTimeDurationFilled = value => {
  if (value && value.date && value.startTime && value.endTime) {
    return null;
  }

  return 'Must select date, start and end';
};

export default {
  NotEmptyValidator,
};
