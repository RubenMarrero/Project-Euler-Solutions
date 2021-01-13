#!/bin/python/

def evenFib(n) : 
    if (n < 1) : 
        return n 
    if (n == 1)  : 
        return 2
   
    # calculation of  
    # Fn = 4*(Fn-1) + Fn-2 
    return ((4 * evenFib(n-1)) + evenFib(n-2))  


evenFibSum = 0
i = 0
while evenFibSum <=4*(10**6):
    evenFibSum += evenFib(i)
    i+=1

print(evenFibSum)
