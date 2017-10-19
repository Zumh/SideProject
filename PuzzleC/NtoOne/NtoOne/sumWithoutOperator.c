
/*
 Project: Puzzle
 Author:Zumhliansang Lungler
 File: sumWithoutOperator.c
 Date: October 19, 2017
 Describtion: This program take input number from calculate the sum without using operator.
 */
#include <stdio.h>
#define N 10

int add (int first, int second)
{
    return(printf("%*c%*c", first, ' ', second, ' '));
}

//int recursiveMethod(int);
int main(void)
{
    printf("Sum = %d", add(5,6));
    return(0);
}


