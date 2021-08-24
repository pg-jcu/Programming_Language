package chapter04;
import java.util.Scanner;
import java.util.InputMismatchException;

public class WordGameApp_Exam {
	private Scanner scanner;
	private String startWord = "아버지";
	private Player_E[] players; 
	
	public WordGameApp_Exam() {
		scanner = new Scanner(System.in);
	}
	
	public void run() {
		System.out.println("끝말잇기 게임을 시작합니다...");
		
		int nPlayers;
		
		while(true) {
			System.out.print("게임에 참가하는 인원은 몇명입니까>>");
			try {
				nPlayers = scanner.nextInt();
				break;
			} catch(InputMismatchException e) {
				System.out.println("정수를 입력해야만 합니다.");
				scanner.nextLine();
				continue;
			}
		}
		
		players = new Player_E[nPlayers];
		
		for(int i=0; i<nPlayers; i++) {
			System.out.print("참가자의 이름을 입력하세요>>");
			String name = scanner.next();
			players[i] = new Player_E(name);
		}
		
		String lastWord = startWord;
		
		System.out.println("시작하는 단어는 " + lastWord + "입니다.");
		int next = 0;
		
		while(true) {
			String newWord = players[next].getWordFromUser();
			
			if(!players[next].checkSuccess(lastWord)) {
				System.out.print(players[next].getName() + "께서 패했습니다.");
				break;
			}
			next++;
			next %= players.length;
			lastWord = newWord;
		}
	}
	
	public static void main(String[] args) {
		WordGameApp_Exam game = new WordGameApp_Exam();
		game.run();
	}

}

class Player_E {
	private Scanner scanner;
	private String name;
	private String word;
	
	public Player_E(String name) {
		this.name = name;
		scanner = new Scanner(System.in);
	}
	
	public String getName() { return name; }
	
	public String getWordFromUser() {
		System.out.print(name+">>");
		word = scanner.next();
		return word;
	}
	
	public boolean checkSuccess(String lastWord) {
		int lastIndex = lastWord.length()-1;
		
		if(lastWord.charAt(lastIndex) == word.charAt(0))
			return true;
		else
			return false;
	}
}
