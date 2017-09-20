
a = [2,4]
b = [16, 32, 96]

gcd 0 b = b
gcd a b = gcd (b % a) a

lcm a b = (a * b) / gcd a b

first = a.reduce lcm
second = b.reduce gcd

betweenTwoSets acc a b = if a > b
	       	       	 then acc
			 else if b % a == 0
			 then betweenTwoSets (acc + 1) (first + a) b
			 else betweenTwoSets acc (first + a) b
print (first)
print (second)
print (betweenTwoSets 0 first second)

