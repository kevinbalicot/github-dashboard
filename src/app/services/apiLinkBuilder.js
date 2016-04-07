'use strict';

var ApiLinkBuilder = function() {

    this.domain = 'https://api.github.com';
    this.token = 'dde2445b5b5db07e66ab61a89aa5b0f854e6a2ea';
};

/**
 * Generate link
 * @param {string} url
 * @param {object} parameters
 * @param {object} queries
 * @return string
 */
ApiLinkBuilder.prototype.generateLink = function(url, parameters, queries) {

    url = this._integrateParameters(url, parameters);
    url = this._integrateDomain(url);
    url = this._integrateAccessToken(url);
    url = this._integrateQueries(url, queries);

    return url;
};

/**
 * Integrate parameters into url
 * @param {string} url
 * @param {object} parameters
 * @return string
 */
ApiLinkBuilder.prototype._integrateParameters = function(url, parameters) {

    for (var key in parameters) {
        url = url.replace('{' + key + '}', parameters[key]);
    }

    return url;
};

/**
 * Integrate domain name into url
 * @param {string} url
 * @return string
 */
ApiLinkBuilder.prototype._integrateDomain = function(url) {

    return this.domain + url;
};

/**
 * Integrate access token into url
 * @param {string} url
 * @return string
 */
ApiLinkBuilder.prototype._integrateAccessToken = function(url) {
    return url + '?access_token=' + this.token;
};

/**
 * Integrate queries into url
 * @param {string} url
 * @param {object} queries
 * @return string
 */
ApiLinkBuilder.prototype._integrateQueries= function(url, queries) {

    for (var key in queries) {
        if (queries.hasOwnProperty(key) && queries[key] !== null) {
            url += '&' + key + '=' + encodeURIComponent(queries[key]);
        }
    }

    return url;
};

window.ApiLinkBuilder = new ApiLinkBuilder();
