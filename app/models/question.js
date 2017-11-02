import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),

    test: DS.belongsTo('test'),
    respuestas: DS.hasMany('respuestal')
});
