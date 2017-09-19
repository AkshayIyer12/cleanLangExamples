include node-core
request = require 'request'

fact 1 = 1
fact n = n * fact (n - 1)

computeFact = do
  num <- getLine 'enter value for factorial: '
  let val = fact (parseInt num)
  putLine val
  return (String val)

do
  data <- computeFact
  let link = 'http://artii.herokuapp.com/make?text=' ++ data
  err res body <- IO (request link)
  maybeErr err (putLine err)
  putLine body