#include <stdio.h>
#include <math.h>

int main() {
    double x, y;

    printf("Enter the value of x: ");
    scanf("%lf", &x);

    y = pow(x, 5) + x + 10;

    printf("For x = %.2lf, y = %.2lf\n", x, y);

    return 0;
}
