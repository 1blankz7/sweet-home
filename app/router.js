import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('create');
  });
  this.route('settings');
  this.route('chat');
  this.route('books');
  this.route('movies');
  this.route('login');
});

export default Router;
