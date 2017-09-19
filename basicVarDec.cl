include node-core
num = 10
str = 'abcd'
bool = true
b = (10 + 15) * 20
prec = 10 + 15 * 20
c = if 10 < 3 then true else false
d = if 10 > 3
 then true
 else false
e = let val1 = 20 in (val1 + 43) * 2
f = let x = 40 y = 67 z = 87 in (((7 * x) / z) / y) 
main = putLine num str bool prec b c d e f