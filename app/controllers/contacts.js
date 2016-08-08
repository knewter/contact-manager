import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy: null,
  sortedContacts: Ember.computed('sortBy', 'model', function(){
    let sortBy = this.get('sortBy');
    let contacts = this.get('model');

    if(!!sortBy){
      return contacts.sortBy(sortBy);
    } else {
      return contacts;
    }
  })
});
