#include <stdio.h>

int main() {
    int Marks;
    printf("Enter your Marks:");
    scanf("%d", &Marks);

    if (Marks < 0 || Marks > 100) {
        printf("Wrong entry\n");
        return 0;
    }

    char grade;
    char feedback[100];

    switch (Marks / 10) {
        case 10:
        case 9:
            grade = 'A';
            strcpy(feedback, "Your performance is excellent\nCongratulations");
            break;
        case 8:
            grade = 'A';
            strcpy(feedback, "Well done for your achievement");
            break;
        case 7:
            grade = 'B';
            strcpy(feedback, "Your performance is better");
            break;
        case 6:
            grade = 'C';
            strcpy(feedback, "Your performance is good");
            break;
        case 5:
            grade = 'D';
            strcpy(feedback, "Your performance is good");
            break;
        default:
            grade = 'F';
            strcpy(feedback, "You Better do well in the next");
    }

    printf("Your grade is : %c\n", grade);
    printf("%s\n", feedback);

    return 0;
}
