#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define NUM_RANKS (13)
#define NUM_SUITS (4)
#define NUM_CARDS (5)

int g_num_in_rank[NUM_RANKS] = {0, };
int g_num_in_suit[NUM_SUITS] = {0, };
bool g_is_straight = false;
bool g_is_flush = false;
bool g_is_four = false;
bool g_is_three = false;
int g_pairs = 0;

void read_cards(void);
void analyze_hand(void);
void print_result(void);

/**********************************************************
 * main: read_cards, analyze_hand와 print_result를         *
 *       반복적으로 호출해준다.                             *
 **********************************************************/
int main(void) {
    for(;;) {
        read_cards();
        analyze_hand();
        print_result();
    }
}

/**************************************************************
 * read_cards: 카드를 입력받아 외부변수에 저장해준다; 유효하지   *
 *             않거나 중복된 카드가 있는지 확인해준다.          *
 **************************************************************/
void read_cards(void) {
    bool does_card_exists[NUM_RANKS][NUM_SUITS];
    char ch = '\0';
    char rank_ch = '\0';
    char suit_ch = '\0';
    int rank = 0;
    int suit = 0;
    bool is_bad_card = false;
    int cards_read = 0;

    for (rank = 0; rank < NUM_RANKS; ++rank) {
        g_num_in_rank[rank] = 0;
        for (suit = 0; suit < NUM_SUITS; ++suit) {
            does_card_exists[rank][suit] = false;
        }
    }

    for (suit = 0; suit < NUM_SUITS; ++suit) {
        g_num_in_suit[suit] = 0;
    }

    while (cards_read < NUM_CARDS) {
        is_bad_card = false;

        printf("카드를 입력해주세요: ");

        rank_ch = getchar();
        switch (rank_ch) {
            case '0':
                exit(EXIT_SUCCESS);
            case '2': 
                rank = 0;
                break;
            case '3':
                rank = 1; 
                break;
            case '4':
                rank = 2; 
                break;
            case '5':
                rank = 3; 
                break;
            case '6':
                rank = 4; 
                break;
            case '7':
                rank = 5; 
                break;
            case '8':
                rank = 6; 
                break;
            case '9': 
                rank = 7; 
                break;
            case 't':
                /* intentional fallthrough */
            case 'T': 
                rank = 8; 
                break;
            case 'j':
                /* intentional fallthrough */
            case 'J': 
                rank = 9; 
                break;
            case 'q':
                /* intentional fallthrough */
            case 'Q':
                rank = 10; 
                break;
            case 'k':
                /* intentional fallthrough */
            case 'K':
                rank = 11; 
                break;
            case 'a':
                /* intentional fallthrough */
            case 'A':
                rank = 12;
                break;
            default:
                is_bad_card = true;
                break;
        }

        suit_ch = getchar();
        switch (suit_ch) {
            case 'c':
                /* intentional fallthrough */
            case 'C':
                suit = 0;
                break;
            case 'd':
                /* intentional fallthrough */
            case 'D':
                suit = 1;
                break;
            case 'h':
                /* intentional fallthrough */
            case 'H':
                suit = 2;
                break;
            case 's':
                /* intentional fallthrough */
            case 'S': 
                suit = 3;
                break;
            default:
                is_bad_card = true;
                break;
        }

        while ((ch = getchar()) != '\n') {
            if (ch != ' ') {
                is_bad_card = true;
            }
        }
        
        if (is_bad_card) {
            printf("유효하지 않은 카드입니다; 다시 입력해주세요.\n");
        } else if (does_card_exists[rank][suit]) {
            printf("이미 존재하는 카드입니다; 다시 입력해주세요.\n");
        } else {
            ++g_num_in_rank[rank];
            ++g_num_in_suit[suit];
            does_card_exists[rank][suit] = true;
            ++cards_read;
        }
    }  
}

/*****************************************************************
 * analyze_hand: 패가 스트레이트인지, 플러시인지, 포카드인지,      *
 *               쓰리카인드인지를 판별해주고; 페어의 개수를 판별해  *
 *               그 값을 외부변수에 저장해준다.                    *
 *****************************************************************/
void analyze_hand(void) {
    int num_consec = 0;
    int rank = 0;
    int suit = 0;
    g_is_straight = false;
    g_is_flush = false;
    g_is_four = false;
    g_is_three = false;
    g_pairs = 0;

    /* 플러시인지 확인 */
    for (suit = 0; suit < NUM_SUITS; ++suit) {
        if (g_num_in_suit[suit] == NUM_CARDS) {
            g_is_flush = true;
        }
    }

    /* 스트레이트인지 확인 */
    rank = 0;
    while (g_num_in_rank[rank] == 0) {
        ++rank;
    }

    for(; rank < NUM_RANKS && g_num_in_rank[rank] > 0; ++rank) {
        ++num_consec;
    }

    if (num_consec == NUM_CARDS) {
        g_is_straight = true;
        return;
    }

    /* 포카드/쓰리카드 여부와 페어의 개수를 확인*/
    for (rank = 0; rank < NUM_RANKS; ++rank) {
        if (g_num_in_rank[rank] == 4) {
            g_is_four = true;
        }

        if (g_num_in_rank[rank] == 3) {
            g_is_three = true;
        }

        if (g_num_in_rank[rank] == 2) {
            ++g_pairs;
        }
    }
}

/***************************************************************
 * print_result: 사용자에게 analyze_hand를 통해 구한 외부변수를  *
 *               통해 결과값을 출력해준다.                       *
 ***************************************************************/
void print_result(void) {
    if (g_is_straight && g_is_flush) {
        printf("스트레이트 플러시");
    } else if (g_is_four) {
        printf("포카드");
    } else if (g_is_three && g_pairs == 1) {
        printf("풀하우스");
    } else if (g_is_flush) {
        printf("플러시");
    } else if (g_is_straight) {
        printf("스트레이트");
    } else if (g_is_three) {
        printf("쓰리카드");
    } else if (g_pairs == 2) {
        printf("투페어");
    } else if (g_pairs == 1) {
        printf("원페어");
    } else {
        printf("하이카드");
    }

    printf("\n\n");
}