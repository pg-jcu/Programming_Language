/* UPC의 확인자릿수를 계산함 */
#include <stdio.h>

int main(void)
{
    int d;
    int i1;
    int i2;
    int i3;
    int i4;
    int i5;
    int j1;
    int j2;
    int j3;
    int j4;
    int j5;
    int first_sum;
    int second_sum;
    int total;

    printf("첫번째 (한자리수) 숫자를 입력해주세요: ");
    scanf("%1d",&d);
    printf("첫번째 다섯자리 숫자를 입력해주세요: ");
    scanf("%1d%1d%1d%1d%1d", &i1, &i2, &i3, &i4, &i5);
    printf("두번째 다섯자리 숫자를 입력해주세요: ");
    scanf("%1d%1d%1d%1d%1d", &j1, &j2, &j3, &j4, &j5);

    first_sum = d + i2 + i4 + j1 + j3 + j5;
    second_sum = i1 + i3 + i5 + j2 + j4;
    total = 3 * first_sum + second_sum;

    printf("확인자릿수: %d\n", 9 - ((total -1) % 10));

    return 0;
}