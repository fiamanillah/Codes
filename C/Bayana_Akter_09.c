#include <stdio.h>

int main() {
    int n, sum = 0;

    printf("Enter the value of n: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        sum += i * i;
    }

    printf("The sum of the series 1^2 + 2^2 + 3^2 + ... + %d^2 is: %d\n", n, sum);

    return 0;
}
