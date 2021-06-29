/* while문을 활용해 제곱수 표를 출력하라 */

#include <stdio.h>

int main(void)
{
    int i;
    int n;

    printf("본 프로그램은 제곱수 표를 출력합니다.\n");
    printf("본 표의 크기를 결정해주세요: ");
    scanf("%d", &n);

    i = 1;
    while (i <= n) {
        printf("%10d%10d\n", i, i * i);
        ++i;
    }

    return 0;
}