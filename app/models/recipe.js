import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tags: DS.hasMany('ingredient', {async: true}),
  description: DS.attr('string'),
  main_image: DS.attr('string'),
  instructions: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true})
  //author: DS.belongsTo('user', {async: true})
});
