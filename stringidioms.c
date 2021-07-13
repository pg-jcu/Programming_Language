/* 문자열 끝 찾기 */

size_t strlen(const char* str) {
    size_t size;

    for (size = 0; *str != '\0'; ++str) {
        ++size;
    }

    return size;
}

// 압축

size_t strlen(const char* str) {
    size_t size = 0;

    while (*str++) {
        ++size;
    }

    return size;
}

// 성능이 더 좋은 구현 방법

size_t strlen(const char* str) {
    const char* orig_str = str;

    while (*str) {
        ++str;
    }

    return str - orig_str;
}

// 관용구

while (*str) { // str이 널 문자를 가리킴
    ++str;
}

while (*str++) { // str이 널 문자 다음을 가리킴

}

/* 문자열 복사 */

char* strcat(char* destination, const char* source) {
    char* ptr = destination;
    while (*ptr != '\0') {
        ++ptr;
    }

    while (*source != '\0') {
        *ptr = *source;
        ++ptr;
        ++source;
    }
    *ptr = '\0';
    return destination;
}

// 압축

char* strcat(char* destination, const char* source) {
    char* ptr = destination;

    while (*ptr) {
        ++ptr;
    }
    while (*ptr++ = *source++) {
    }
    return destination;
}

// 관용구

while (*ptr++ == *source++) { // 루프가 할당 이후에 종료가 되기 때문에 따로 문자열의
}                             //  끝에 널 문자를 넣는 구문을 작성해줄 필요가 없음.