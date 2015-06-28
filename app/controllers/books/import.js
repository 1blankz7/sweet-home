import Ember from 'ember';

export default Ember.Controller.extend({
  data: "",
  actions: {
    importData: function() {
      var controller = this;
      var rawData = controller.get('data');
      var data = JSON.parse(rawData);
      data.forEach(function(obj) {
        var authorId = obj.author;
        var publisherId = obj.publisher;
        Ember.RSVP.hash({
          author: controller.store.find('author', authorId),
          publisher: controller.store.find('publisher', publisherId)
        }).then(function(data) {
          obj.author = data.author;
          obj.publisher = data.publisher;
          controller.store.createRecord('book', obj).save();
        }, function() {
          delete obj.author;
          delete obj.publisher;
          controller.store.createRecord('book', obj).save();
        });
      });
      controller.set('data', "");
    }
  }
});
