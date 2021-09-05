package chapter03;
import java.util.Scanner;

public class Tr16 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String str[] = {"가위", "바위", "보"};
		
		System.out.println("컴퓨터와 가위 바위 보 게임을 합니다.");
		while (true) {
			System.out.print("가위 바위 보!>>");
			String i = scanner.next();
			if (i.equals("그만"))
				break;
			
			int n = (int)(Math.random()*3);
			if (str[n].equals("가위")) {
				if (i.equals("가위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 비겼습니다.");
				else if (i.equals("바위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 이겼습니다.");
				else if (i.equals("보"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 졌습니다.");
			}
			else if (str[n].equals("바위")) {
				if (i.equals("바위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 비겼습니다.");
				else if (i.equals("보"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 이겼습니다.");
				else if (i.equals("가위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 졌습니다.");
			}
			else if (str[n].equals("보")) {
				if (i.equals("보"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 비겼습니다.");
				else if (i.equals("가위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 이겼습니다.");
				else if (i.equals("바위"))
					System.out.println("사용자 = " + i + ", 컴퓨터 = " + str[n] + ", 사용자가 졌습니다.");
			}
		}
		scanner.close();
	}

}