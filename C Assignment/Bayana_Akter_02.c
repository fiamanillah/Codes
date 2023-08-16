#include <stdio.h>

int main() {
    double dividend, divisor, quotient;

    printf("Enter the dividend: ");
    scanf("%lf", &dividend);

    printf("Enter the divisor: ");
    scanf("%lf", &divisor);

    if (divisor != 0) {
        quotient = dividend / divisor;

        printf("The quotient of %.2lf divided by %.2lf is %.2lf\n", dividend, divisor, quotient);
    } else {
        printf("Math Error.\n");
    }

    return 0;
}
