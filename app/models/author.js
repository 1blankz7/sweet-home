import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  nationality: DS.attr('string'),
  name: DS.attr('string'),
  birth: DS.attr('string'),
  surname: DS.attr('string'),
  fullname: function() {
    return this.get('name') + ", " + this.get('surname');
  }.property('name', 'surname')
});
