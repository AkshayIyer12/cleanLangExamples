include node-core

cde a = do
      g <- getLine 'enter value:'
      let e = g * 2
      return (a ++ e ++ g)

doBlock = do
     c <- cde 'abcd'
     putLine c

