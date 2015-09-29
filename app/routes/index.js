import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  // model() {
  //   var sections = this.store.find('story', {section: "Books"});
  //   return sections;
  // }

});
