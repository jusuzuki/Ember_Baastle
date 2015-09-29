import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  text: DS.attr(),
  section: DS.attr(),
  image: DS.attr()
});
