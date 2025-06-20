'use strict';

/**
 * single-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-text.single-text');
