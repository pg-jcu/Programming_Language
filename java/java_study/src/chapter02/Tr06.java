package chapter02;
import java.util.Scanner;

public class Tr06 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int i, count = 0;
		System.out.print("1~99 사이의 정수를 입력하시오>>");
		i = scanner.nextInt();
		
		int num30 = i / 10;
		int num3 = i % 10; 
		
		if(num30 != 0 && num30 % 3 == 0) 
			count ++;
		if (num3 != 0 && num3 % 3 == 0)
			count ++;
		
		
		if(count == 1) 
			System.out.println("박수짝");
		else if(count == 2) 
			System.out.println("박수짝짝");
		else
			System.out.println("박수X");
		scanner.close();
	}

}
