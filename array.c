#include<stdio.h>
int main(){
    int array[5];
    for(int i=0;i<5;i++){
        printf("enter the values of array:");
        scanf("%d",&array[i]);
    }
    for (int i = 0; i < 5; i++) {
        printf("%d ", array[i]);
    }
    printf("\n");
}