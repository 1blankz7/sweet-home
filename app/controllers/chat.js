import Ember from 'ember';

export default Ember.Controller.extend({
  text: "",
  actions: {
    send: function() {
      var text = this.get('text');
      if(text) {
        var newPost = this.store.createRecord('post', {
          text: text,
          createdAt: new Date()
        });
        newPost.save();
        this.set('text', "");
      }
    }
  }
});
