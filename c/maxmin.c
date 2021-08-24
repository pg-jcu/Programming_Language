/* 배열의 최대 최소 원소를 찾는다 */

#include <stdio.h>

#define ARRAY_SIZE 10

void get_max_min(int arr[], int size, int* out_max, int* out_min);

int main(void) 
{
    int int_arr[ARRAY_SIZE] = {0, };
    int i = 0;
    int big = 0;
    int small = 0;

    printf("숫자 %d개를 입력하시오: ", ARRAY_SIZE);
    for (i = 0; i < ARRAY_SIZE; ++i) 
    {
        scanf("%d", &int_arr[i]);
    }

    get_max_min(int_arr, ARRAY_SIZE, &big, &small);

    printf("최댓값: %d\n", big);
    printf("최솟값: %d\n", small);

    return 0;
}

void get_max_min(int arr[], int size, int* out_max, int* out_min) 
{
    *out_max = *out_min = arr[0];
    for (int i = 0; i < size; ++i) 
    {
        if (*out_max < arr[i]) 
        {
            *out_max = arr[i];
        } 
        else if (arr[i] < *out_min) 
        {
            *out_min = arr[i];
        }
    }
}