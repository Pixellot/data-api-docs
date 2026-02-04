'use strict';

const Ajv = require('ajv');

const ajv = new Ajv();

const scheme = require('../schema.json');

const isValidSchema = ajv.validateSchema(scheme);

if (!isValidSchema) {
  console.log('Schema is invalid');
  console.log(ajv.errors);
} else {
  console.log('Schema is valid');
}
