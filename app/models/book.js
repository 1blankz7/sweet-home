import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  description: DS.attr('string'),
  isbn: DS.attr('string'),
  type: DS.attr('string'),
  topics: DS.attr('string'),
  image: DS.attr('string'),
  created: DS.attr('date'),
  publisher: DS.belongsTo('publisher', {async: true}),
  author: DS.belongsTo('author', {async: true})
});
