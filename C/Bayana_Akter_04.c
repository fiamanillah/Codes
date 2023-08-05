#include <stdio.h>

int main() {
    int marks;


    printf("Enter the student's marks: ");
    scanf("%d", &marks);


    if (marks >= 80 && marks <= 100) {
        printf("Grade: A+\n");
    } else if (marks >= 75 && marks <= 79) {
        printf("Grade: A\n");
    } else if (marks >= 70 && marks <= 74) {
        printf("Grade: A-\n");
    } else if (marks >= 60 && marks <= 69) {
        printf("Grade: B+\n");
    } else if (marks >= 50 && marks <= 59) {
        printf("Grade: B-\n");
    } else if (marks >= 40 && marks <= 49) {
        printf("Grade: C\n");
    } else {
        printf("Grade: F\n");
    }

    return 0;
}
