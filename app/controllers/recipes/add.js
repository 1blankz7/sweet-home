import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var model = this.get('model');
      var controller = this;
      var record = this.store.createRecord('recipe', {
        name: model.name,
        description: model.description,
        instructions: model.instructions
      });
      record.save();
      var ingredientsRawText = model.ingredients;
      ingredientsRawText.match(/[^\r\n]+/g).forEach(function(line) {
        var splitted = line.split(":");
        var data = {
          count: Number.parseInt(splitted[0]),
          unit: splitted.length >= 3 ? splitted[2] : "",
          name: splitted[1]
        };
        var ingredient = controller.store.createRecord('ingredient', data);
        ingredient.save();
        record.get('ingredients').pushObject(ingredient);
      });
      this.set('model', {});
      this.transitionToRoute('recipes');
    }
  }
});
