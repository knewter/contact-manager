import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let contact1 = { id: 1, firstName: 'Josh', lastName: 'Adams', email: 'josh@dailydrip.com'};
    let contact2 = { id: 2, firstName: 'Adam', lastName: 'Dill', email: 'adam@dailydrip.com'};

    return [contact1, contact2];
  }
});
