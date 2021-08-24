package chapter06;
import java.util.Scanner;

class Person {
	Scanner scanner;
	private int num;
	private String name;
	private Person [] person;
	
	public Person() {
		scanner = new Scanner(System.in);
	}
	
	public Person(String name) {
		this.name = name;
	}
	
	public void run() {
		Scanner enter = new Scanner(System.in);
		
		System.out.print("갬블링 게임에 참여할 선수 숫자>>");
		num = scanner.nextInt();
		person = new Person[num];
		
		for(int i=0; i<num; i++ ) {
			System.out.print(i+1 + "번째 선수 이름>>");
			name = scanner.next();	
			person[i] = new Person(name);
		}
		
		while (true) {
			for(int i=0; i<person.length; i++) {			
				System.out.print("[" + person[i].name + "]:<Enter>");
				enter.nextLine();
				
				int num1 = (int)(Math.random()*3 + 1);
				int num2 = (int)(Math.random()*3 + 1);							
				int num3 = (int)(Math.random()*3 + 1);
			
				if(num1 == num2 && num2 == num3) {
					System.out.println("\t" + num1 + "   " + num2 + "   " + num3 + "   " + person[i].name + "님이 이겼습니다!");
					enter.close();
					return;
				}
				else {
					System.out.println("\t" + num1 + "   " + num2 + "   " + num3 + "   아쉽군요!");
				}
			}
		}
	}	
}

public class Tr12 {

	public static void main(String[] args) {
		Person person = new Person();
		person.run();

	}

}