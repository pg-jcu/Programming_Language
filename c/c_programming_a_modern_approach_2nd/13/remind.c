/* 한 달 리마인더 목록 출력하기 */

#include <stdio.h>
#include <string.h>

#define MAX_REMIND (50)
#define MSG_LEN (60)

int read_line(char str[], int size);

int main(void) 
{
    char reminder[MAX_REMIND][MSG_LEN + 3];
    char day_str[3];
    char msg_str[MSG_LEN + 1];
    int day;
    int i;
    int j;
    int num_remind = 0;

    for (;;) 
    {
        if (num_remind == MAX_REMIND) 
        {
            printf("-- No space left --\n");
            break;
        }

        printf("Enter day and reminder: ");
        scanf("%2d", &day);
        if (day == 0) 
        {
            break;
        }
        sprintf(day_str, "%2d", day);
        read_line(msg_str, MSG_LEN);

        for (i = 0; i < num_remind; ++i) 
        {
            if (strcmp(day_str, reminder[i]) < 0) 
            {
                break;
            }
        }
        for (j = num_remind; j > i; --j) 
        {
            strcpy(reminder[j], reminder[j - 1]);
        }

        strcpy(reminder[i], day_str);
        strcat(reminder[i], msg_str);

        ++num_remind;
    }

    printf("\nDay Reminder\n");
    for (i = 0; i < num_remind; ++i) 
    {
        printf(" %s\n", reminder[i]);
    }

    return 0;
}

int read_line(char str[], int size) 
{
    int ch;
    int i = 0;
    
    while ((ch = getchar()) != '\n')
    {
        if (i < size) 
        {
            str[i++] = ch;
        }
    }
    str[i] = '\0';

    return i;
}