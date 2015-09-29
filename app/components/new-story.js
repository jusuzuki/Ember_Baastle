import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    save() {
        var params = {
          headline: this.get('headline'),
          text: this.get('text'),
          image: this.get('image'),
          section: this.get('section'),
        };
        this.set('addNewStory', false),
        this.sendAction('save', params);
      }
    }
});
