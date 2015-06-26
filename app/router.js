import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('settings');
  this.route('chat');
  this.route('books');
  this.route('movies');
  this.route('login');
  this.route('recipes', function() {
    this.route('add');
    this.route('show', '/:id');
  });
});

export default Router;
