//
//  memoryReVariable.c
//  TestingGround
//
//  Get the address and size of the variable. Typecast the address to char pointer. Now loop for size of the variable and print the value at typecasted pointer.
//

#include <stdio.h>
typedef unsigned char *bytePointer;

/*
     show bytes takes byte pointer as an argument
 and prints memory contents from bytePointer
 to bytePointer + len
 
 */
int showBytes(bytePointer start, int len) {
    int i;
    
    for (i = 0; i < len; i++)
    {
        printf(" %.2x", start[i]);
        printf("\n");
    }
    return 0;
}

void showInt(int x)
{
    showBytes((bytePointer) &x, sizeof(int));
}

void showFloat(float x)
{
    showBytes((bytePointer) &x, sizeof(float));
}

void showPointer(void *x)
{
    showBytes((bytePointer) &x, sizeof(void *));
}

/* Drover program to test above functions */
int main(void)
{
    int i = 1;
    float f = 1.0;
    int *p = &i;
    showFloat(f);
    showInt(i);
    showPointer(p);
    showInt(i);
    return(0);
}
