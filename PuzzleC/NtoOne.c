/*
 Author:Zumhliansang Lungler
 Date: October 19, 2017
 Describtion: This program take input number from user and print withou using semicolon.
 */

#include <stdio.h>
#define N 10

void iterateMethod(int num);

//int recursiveMethod(int);
int main(void)
{
    int num = 0;
    
    //This is the recursive method
    //faild to use because of the syntax
    //recursiveMethod(num);
   
    //Iterative method
    iterateMethod(1);
    
    return(0);
}

void iterateMethod(int num)
{
    while(num <= N && printf("%d ", num) && num++)
    {
        
    }
}

/*
int recursiveMethod(int num)
{
    if ((num <= N) && printf("%d", num)&& recursiveMethod(num + 1))
    {
        
    }
    
}
*/

