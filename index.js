'use strict';

const request = require('request-promise');

module.exports.websites = {
    ping: passTrough =>

        request({
            uri: `http://${passTrough.instance.domain}`,
            resolveWithFullResponse: true,
            time: true
        }).catch(err => (

            {statusCode: err.error.code == 'ETIMEDOUT' ? 408 : 520}

        )).then(requestResponse => {

            passTrough.request = requestResponse;

        })

};