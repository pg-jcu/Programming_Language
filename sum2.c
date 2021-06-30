/* long 변수를 이용하여 수열의 합을 구한다 */

#include <stdio.h>

int main(void)
{
    long n;
    long sum = 0;

    printf("본 프로그램은 정수열의 합을 출력합니다.\n");
    printf("정수 여러 개를 입력하십시오 (수열을 끝내려면 0을 입력하십시오): ");

    scanf("%ld", &n);
    while (n != 0){
        sum += n;
        scanf("%ld", &n);
    }
    printf("정수열의 합: %ld", sum);

    return 0;
}