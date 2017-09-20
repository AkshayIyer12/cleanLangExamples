concatStrType strType count accum = if (count == 0)
	      	      	    	       then accum
				       else (concatStrType strType (count - 1) (accum ++ strType))

produceStep str1 str2 len1 len2 = (concatStrType str1 len1 '') ++ (concatStrType str2 len2 '')

printStairs h count acc = if (count == h)
	      	    	     then (acc ++ (produceStep ' ' '#' (h - count) count))
			     else (printStairs h (count + 1) (acc ++ (produceStep ' ' '#' (h - count) count ++ '\n')))

print (printStairs 10 2 '')
