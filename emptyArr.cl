len [] = 0
len arr = 5 + (arr.slice 4)
print (len [1,1,2,3,2,1,3])