#include <stdio.h>

int main() {
    int age;


    printf("Enter the person's age: ");
    scanf("%d", &age);


    if (age >= 18) {
        printf("Eligible for voting\n");
    } else {
        printf("Not eligible for voting\n");
    }

    return 0;
}
