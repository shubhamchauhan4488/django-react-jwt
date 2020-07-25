export const createBusinesses = (businesses = []) => {
  const businessState = businesses.reduce((businessShape, currentBusiness) => {
    const {
      id,
      email,
      name,
      description,
      tagline
    } = currentBusiness;

    const business = {
      id,
      email,
      name,
      description,
      tagline,
    };

    businessShape.byId[id] = business;
    businessShape.allIds.push(id);

    return businessShape;
  }, { byId: {}, allIds: [] });
  return businessState;
};

export const createBusinessHours = (businessHours = []) => {
  console.log('createBusinessHours: : businessHours', businessHours)
  const businessHoursState = businessHours.reduce((businessHoursShape, currentBusinessHour) => {
    const {
      id,
      weekday_from: weekdayFrom,
      weekday_to: weekdayTo,
      from_hour: fromHour,
      to_hour: toHour,
      business: businessId
    } = currentBusinessHour;

    const businessHour = {
      id,
      weekdayFrom,
      weekdayTo,
      fromHour,
      toHour,
      businessId
    };

    businessHoursShape.byId[id] = businessHour;
    businessHoursShape.allIds.push(id);

    return businessHoursShape;
  }, { byId: {}, allIds: [] });
  return businessHoursState;
};

