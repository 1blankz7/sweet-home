import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var model = this.get('model');
      var record = this.store.createRecord('recipe', {
        name: model.name,
        description: model.description,
        instructions: model.instructions
      });
      record.save();
      this.set('model', {});
      this.transitionToRoute('recipes');
    }
  }
});
