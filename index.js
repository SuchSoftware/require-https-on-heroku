module.exports = function(requireHttps) {
  return function(req, res, next) {
    if (requireHttps && req.headers['x-forwarded-proto'] !== 'https') {
      var sslUrl = ['https://', req.hostname, req.url].join('')

      return res.redirect(sslUrl)
    }

    return next()
  }
}
