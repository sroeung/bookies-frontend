import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	model : function(){ 
		this.store.push('book', {
			id : 1,
			title : 'Effective Java', 
			author : 'Joshua Bloch', 
			genre : 'computer', 
			ISBN_number : '#001', 
			description : 'how to write effective java', 
			screenshot : ''
		})
		return this.store.all('book');
	}
});
