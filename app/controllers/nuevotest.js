import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        irExamenes(){
            return this.transitionToRoute('examenes');
        }
    }
});
