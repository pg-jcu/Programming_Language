/* 사용자가 난수 맞추기 게임 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX_NUMBER (100)

void initialize_number_generator(void);
int get_new_secret_number(void);
void read_guesses(int secret_number);

int main(void) 
{
    char command = '\0';
    int secret_number = 0;

    printf("1과 100 사이의 난수를 맞춰보세요!!\n\n", MAX_NUMBER);
    initialize_number_generator();
    do 
    {
        secret_number = get_new_secret_number();
        printf("컴퓨터가 난수를 정했습니다, 맞춰보세요!.\n");
        read_guesses(secret_number);
        printf("한 판 더? (Y/N) ");
        scanf("%c", &command);
        printf("\n");
    } while (command == 'y' || command == 'Y');

    return 0;
}

/*********************************************************
* initialize_number_generator: 당일 시간을 바탕으로       *
*                              난수 생성기를 초기화한다.  *
**********************************************************/
void initialize_number_generator(void) 
{
    srand((unsigned) time(NULL));
}

/*********************************************************
* get_new_secret_number: 1과 MAX_NUMBER 사이의 난수를     *
*                        반환한다.                        *
**********************************************************/
int get_new_secret_number(void) 
{
    return rand() % MAX_NUMBER + 1;
}

/*********************************************************
* read_guesses: 사용자의 입력을 반복적으로 받아 사용자의   *
*               입력값이 정답보다 더 작은지, 큰지,         *
*               같은지를 알려준다. 만약 같다면 사용자가    *
*               총 몇 번 찍었는지를 알려주고 반환한다.     *
**********************************************************/
void read_guesses(int secret_number) 
{
    int guess = 0;
    int num_guesses = 0;

    for (;;) 
    {
        ++num_guesses;
        printf("정답은?: ");
        scanf("%d", &guess);
        if (guess == secret_number) 
        {
            printf("%d번째 시도만에 맞췄네요!\n\n", num_guesses);
            return;
        } 
        else if (guess < secret_number) 
        {
            printf("너무 작네요; 다시해보세요.\n");
        } 
        else 
        {
            printf("너무 크네요; 다시해보세요.\n");
        }
    }
}