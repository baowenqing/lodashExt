'use strict';

const _ = require('lodash');

_.isEmptyByOld=_.isEmpty
_.isEmpty = function (value) {
    return _.isEmptyByOld( _.toString(value))  ;
}

module.exports = _;

