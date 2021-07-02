/* Reverses a series of numbers using a variable-length array - C99 only */

#include <stdio.h>

int main(void) {
    int i;
    int reverse_count;

    printf("How many numbers do you want to reverse?: ");
    scanf("%d", &reverse_count);

    int numbers[reverse_count];

    printf("Enter %d numbers: ", reverse_count);
    for (i = 0; i < reverse_count; ++i) {
        scanf("%d", &numbers[i]);
    }

    printf("In reverse order:");
    for (i = reverse_count - 1; i >= 0; --i) {
        printf(" %d", numbers[i]);
    }
    printf("\n");
    
    return 0;
}