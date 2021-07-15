/* 세 숫자들을 두 개 씩 짝지은 모든 경우의 평균을 구한다 */

#include <stdio.h>

double get_average(double left, double right) 
{
    return (left + right) / 2;
}

int main(void) 
{
    double x;
    double y;
    double z;

    printf("숫자 세 개를 입력해주세요: ");
    scanf("%lf%lf%lf", &x, &y, &z);
    printf("%g와 %gd의 평균: %g\n", x, y, get_average(x, y));
    printf("%g와 %gd의 평균: %g\n", y, z, get_average(y, z));
    printf("%g와 %gd의 평균: %g\n", z, x, get_average(z, x));

    return 0;
}