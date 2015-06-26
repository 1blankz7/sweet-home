import DS from 'ember-data';

export default DS.Model.extend({
  count: DS.attr('number'),
  unit: DS.attr('string'),
  name: DS.attr('string')
});
