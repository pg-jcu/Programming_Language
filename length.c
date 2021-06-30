/* 메세지의 길이를 알아낸다 */

#include <stdio.h>

int main(void)
{
    char ch;
    int message_length = 0;

    printf("Enter a message: ");
    ch = getchar();
    while (ch != '\n') {
        ++message_length;
        ch = getchar();
    }
    printf("Your message was %d character(s) long.\n", message_length);

    return 0;
}