/* 빠른정렬 알고리즘을 이용해 정수의 배열을 정렬해준다 */

#include <stdio.h>

#define N (10)

void quicksort_recursive(int arr[], int low, int high);
int split(int arr[], int low, int high);

int main(void) 
{
    int arr[N] = {0, };
    int i = 0;

    printf("정렬할 숫자 %d개를 입력하세요: ", N);
    for (i = 0; i < N; ++i) 
    {
        scanf("%d", &arr[i]);
    }

    quicksort_recursive(arr, 0, N - 1);

    printf("정렬 이후: ");
    for (i = 0; i < N; ++i) 
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}

void quicksort_recursive(int arr[], int low, int high) 
{
    int middle = 0;

    if (low >= high) 
    {
        return;
    }

    middle = split(arr, low, high);
    quicksort_recursive(arr, low, middle - 1);
    quicksort_recursive(arr, middle + 1, high);

}

int split(int arr[], int low, int high)
{
    int part_element = arr[low];

    for (;;) 
    {
        while (low < high && part_element <= arr[high]) 
        {
            --high;
        }

        if (low >= high) 
        {
            break;
        }

        arr[low++] = arr[high];

        while (low < high && arr[low] <= part_element) 
        {
            ++low;
        }

        if (low >= high) 
        {
            break;
        }

        arr[high--] = arr[low];
    }

    arr[high] = part_element;

    return high;
}