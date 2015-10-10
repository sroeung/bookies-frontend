import DS from 'ember-data';

export default DS.Model.extend({
  title : DS.attr('string'), 
  author : DS.attr('string'), 
  genre : DS.attr('string'), 
  ISBN_number : DS.attr('string'), 
  description : DS.attr('string'),
  screenshot : DS.attr('string') 
});

