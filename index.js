'use strict';

const request = require('request-promise');
const debug = require('debug')('sawmon:plugin:website-request');

module.exports.websites = {
    ping: passTrough => {

        debug(`Starting request for http://${passTrough.instance.domain}`);
        
        return request({
            uri: `http://${passTrough.instance.domain}`,
            resolveWithFullResponse: true,
            time: true
        }).catch(err => (

            {statusCode: err.error.code == 'ETIMEDOUT' ? 408 : 520}

        )).then(requestResponse => {
            
            debug(`Request for http://${passTrough.instance.domain} done.`);
            
            passTrough.request = requestResponse;

        });

    }

};
