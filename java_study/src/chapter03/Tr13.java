package chapter03;

public class Tr13 {

	public static void main(String[] args) {
		for (int i=1; i < 100; i++) {
			int x = i%10;
			int y = i/10;
			int count = 0;
			
			if ( x != 0 && x%3 == 0) {
				count++;
			}
			if ( y != 0 && y%3 == 0 ){
				count++;
			}
			
			if (count == 1)
				System.out.println(i + " ¹Ú¼ö " + "Â¦");
			if (count == 2)
				System.out.println(i + " ¹Ú¼ö " + "Â¦Â¦");
		}

	}

}
