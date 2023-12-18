#include <stdio.h>

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);
    
    if (number % 2 == 0) {
        printf("Even Number\n");
    } else if (number % 2 == 1) {
        printf("ODD Number\n");
    } else {
        printf("Math Error\n");
    }

    return 0;
}
