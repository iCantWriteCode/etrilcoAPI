'use strict';

module.exports = function (Player) {
    // Remove existing validations for email
    delete Player.validations.email;
};
