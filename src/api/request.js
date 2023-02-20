import $http from './http'

/**
 * @param {String} method  Request method：get、post、delete、put
 * @param {String} url     Request url:
 * @param {Object} data    Request data
 * @param {Object} params  Request parameters
 * @param {Object} config  Request configuration
 * @returns {Promise}      Return promise object
 */

const X_API_KEY = 'live_hBqpPC8hwyZ9G6H2VbQ6dLiGjqLDKmRcrnt56NkPwS3UyUqRUH2bHcYgnupaL38O';

const request = ({
  method,
  url,
  data,
  params,
  config,
}) => {
  method = method.toLowerCase();
  if (method == 'post') {
    return $http.post(url, data, {
      headers: {
        'content-type': 'application/json',
        'x-api-key': X_API_KEY,
      },
      params: params || {},
      ...config
    })
  } else if (method == 'get') {
    return $http.get(url, {
      headers: {
        'x-api-key': X_API_KEY
      },
      params: data || {},
      ...config
    })
  } else if (method == 'delete') {
    return $http.delete(url, {
      headers: {
        'x-api-key': X_API_KEY
      },
      params: data || {},
      ...config
    })
  }
}

export {
  request
}
