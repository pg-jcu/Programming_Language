/* 수열의 합을 구한다 */

#include <stdio.h>

int main(void)
{
    int n;
    int sum = 0;

    printf("본 프로그램은 정수열의 합을 출력한다.\n");
    printf("정수 여러 개를 입력하라 (수열을 끝내려면 0을 입력하라): ");

    scanf("%d", &n);
    while (n != 0) {
        sum += n;
        scanf("%d", &n);
    }
    printf("정수열의 합: %d", sum);

    return 0;
}