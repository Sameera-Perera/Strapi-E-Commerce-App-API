'use strict';

/**
 * popular-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-product.popular-product');
