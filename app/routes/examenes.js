import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return {
            test: this.store.findAll('test'),
            
        }
    },
});
