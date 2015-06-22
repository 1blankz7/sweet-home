import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate().then(function() {
        this.transitionToRoute('login');
      }.bind(this));
    }
  }
});
