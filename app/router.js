import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examenes', {path:'/'});
  this.route('examen', {path: 'examen/:idTest'});
  this.route('nuevotest');
});

export default Router;
