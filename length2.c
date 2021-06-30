/* 메세지의 길이를 알아낸다 */

#include <stdio.h>

int main(void)
{
    int message_length = 0;

    printf("Enter a message: ");
    while (getchar() != '\n') {
        ++message_length;
    }
    printf("Your message was %d character(s) long.\n", message_length);

    return 0;
}