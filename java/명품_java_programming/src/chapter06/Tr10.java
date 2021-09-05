/*package chapter06;     실패작
import java.util.Scanner;

class Person {
	Scanner scanner;
	private String name;
	private Person [] player;
	private GNum [] gnum;
	
	public Person() {
		scanner = new Scanner(System.in);
	}
	
	public Person(String name) {
		this.name = name;
	}
	
	public void run() {
		player = new Person[2];
		
		for(int i=0; i<2; i++ ) {
		System.out.print(i+1 + "번째 선수 이름>>");
		name = scanner.next();	
		player[i] = new Person(name);
		}
		
		while (true) {
			for(int i=0; i<2; i++) {
				gnum = new GNum[3];
				
				System.out.println("[" + player[i].name + "]:<Enter>");
				scanner.nextLine();
				for(int j=0; j<3; j++) {
					int num = (int)(Math.random()*3 + 1);
					gnum[j] = new GNum(num);						
				}
			if(gnum[0] == gnum[1] && gnum[1] == gnum[2]) {
				System.out.println(gnum[0].getGNum() + "   " + gnum[1].getGNum() + "   " + gnum[2].getGNum() + 
						player[i].name + "님이 이겼습니다!");
				break;
			}
			else {
				System.out.println(gnum[0].getGNum() + "   " + gnum[1].getGNum() + "   " + gnum[2].getGNum() + "   아쉽군요!");
			}
			}
		}
	}	
}

class GNum {
	private int num;
	
	public GNum(int num) {
		this.num = num;
	}
	
	public int getGNum() {
		return num;
	}
	
	public void setGNum() {
		
	}
	
}

public class Tr10 {

	public static void main(String[] args) {
		Person person = new Person();
		person.run();

	}


}*/
