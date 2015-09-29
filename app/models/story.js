import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  text: DS.attr(),
  section: DS.belongsTo(),
  image: DS.attr()
});
