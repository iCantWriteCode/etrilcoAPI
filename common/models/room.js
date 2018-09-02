'use strict';

module.exports = function (Room) {
    Room.validatesUniquenessOf('roomCode');
};
