'use strict';

const LUISClient = require('luis-client').default;

const agent = require('./http');

const client = new LUISClient({
    appId: 'de16d583-c769-479a-a1d3-28893a7ba752',
    appKey: 'ade07167940048de85cc25c02579086f',
    authoringKey: 'ade07167940048de85cc25c02579086f',
    verbose: 'true',
    region: 'westeurope',
    version: '2.0',
    versionId: '0.1'
}, agent);

/********** PREDICT **************/
const predict = text => client.predict(text);

/********** TRAIN **************/
const startTraining = () => client.startTraining();

const getTrainingStatus = () => client.getTrainingStatus();

/********** INTENTS *************/
const createIntent = intentName => client.createIntent(intentName);

const getIntent = intentId => client.getIntent(intentId);

const getIntents = () => client.getIntents();

const renameIntent = (intentId, intentName) => client.renameIntent(intentId, intentName);

const deleteIntent = intentId => client.deleteIntent(intentId);

/********** UTTERANCES/EXAMPLES *************/
const createUtterance = parameters => client.createUtterance(parameters);

const createUtterances = parameters => client.createUtterances(parameters);

const deleteUtterance = utteranceId => client.deleteUtterance(utteranceId);

const getUtterances = (skip, take) => client.getUtterances(skip, take);

/********** ENTITIES *************/
const createEntity = entityName => client.createEntity(entityName);

const getEntity = entityId => client.getEntity(entityId);

const getEntities = () => client.getEntities();

const renameEntity = (entityId, entityName) => client.renameEntity(entityId, entityName);

const deleteEntity = entityId => client.deleteEntity(entityId);

module.exports = {
    predict,
    startTraining,
    getTrainingStatus,
    createIntent,
    getIntent,
    getIntents,
    renameIntent,
    deleteIntent,
    createUtterance,
    createUtterances,
    deleteUtterance,
    getUtterances,
    createEntity,
    getEntity,
    getEntities,
    renameEntity,
    deleteEntity };