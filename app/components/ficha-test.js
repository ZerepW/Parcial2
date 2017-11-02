import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        borrarTest(){
            this.get('test').destroyRecord();
        }
    }
});
