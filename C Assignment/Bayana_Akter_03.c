#include <stdio.h>

int main() {
    int dividend, divisor, modulus;

    printf("Enter the dividend: ");
    scanf("%d", &dividend);

    printf("Enter the divisor: ");
    scanf("%d", &divisor);


    if (divisor != 0) {
 
        modulus = dividend % divisor;

        printf("The modulus of %d divided by %d is %d\n", dividend, divisor, modulus);
    } else {
        printf("Math Error.\n");
    }

    return 0;
}
