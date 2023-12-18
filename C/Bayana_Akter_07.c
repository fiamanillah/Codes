#include <stdio.h>

int main() {
    int num1, num2;
    
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    printf("%d + %d = %d\n", num1, num2, num1 + num2);

    printf("%d - %d = %d\n", num1, num2, num1 - num2);

    printf("%d * %d = %d\n", num1, num2, num1 * num2);

    if (num2 != 0) {
        printf("%d / %d = %.2f\n", num1, num2, (float) num1 / num2);
        printf("%d %% %d = %d\n", num1, num2, num1 % num2);
    } else {
        printf("Math Error\n");
    }

    return 0;
}
