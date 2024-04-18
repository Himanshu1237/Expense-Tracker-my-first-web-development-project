#include<stdio.h>

int main() {
    int array_2d[4][4];

    for(int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            printf("Enter the value for element [%d][%d]: ", i, j);
            scanf("%d", &array_2d[i][j]);
        }
    }

    printf("The 2D array elements are:\n");
    for(int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            printf("%d ", array_2d[i][j]);
        }
        printf("\n"); 
    }

    return 0;
}

