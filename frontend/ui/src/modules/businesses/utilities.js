export const createBusinesses = (businesses = []) => {
  const businessState = businesses.reduce((businessShape, currentBusiness) => {
    const {
      id,
      email,
      name,
      description,
    } = currentBusiness;

    const business = {
      id,
      email,
      name,
      description,
    };

    businessShape.byId[id] = business;
    businessShape.allIds.push(id);

    return businessShape;
  }, { byId: {}, allIds: [] });
  return businessState;
};
