import DS from 'ember-data';

export default DS.Model.extend({
  recipes: DS.hasMany('recipe', {async: true}),
  count: DS.attr('number'),
  unit: DS.attr('string'),
  name: DS.attr('string')
});
