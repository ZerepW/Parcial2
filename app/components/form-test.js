import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions:{
        save(){
            let test = this.get('test');
            if(Ember.isBlank(test.get('nombre'))){
                return alert('El campo de nombre no puede estar vacio');
            }
            test.save().then(()=>{
                    return Ember.RSVP.all(test.get('questions').invoke('save')).then((arrPre)=>{
                            for(var i = 0, len = arrPre.length;i<len; i++){
                                return Ember.RSVP.all(arrPre[i].get('respuestas').invoke('save')).then(()=>{
                                })
                            }
                    }).then(()=>{

                        alert("Se guardo!");
                        this.sendAction('didSave');
                    })
            });
        },
        saveQuestion(){
            //INICIA UNA NUEVA ACTIVIDAD
            let question = this.get('store').createRecord('question',{
                test: this.get('test')
            });
            let respuesta1 = question.get('respuestas').createRecord({
                question: question
            });
            let respuesta2 = question.get('respuestas').createRecord({
                question: question
            });
            let respuesta3 = question.get('respuestas').createRecord({
                question: question
            });
            
        }
    }
});
