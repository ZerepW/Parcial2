import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        let id = params.idTest;
        return this.store.find('test',id);  
    }
});
