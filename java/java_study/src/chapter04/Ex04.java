package chapter04;

public class Ex04 {
	String title;
	String author;
	
	public Ex04(String t) {
		title = t;
		author = "작자미상";
	}
	
	public Ex04(String t, String a) {
		title = t;
		author = a;
	}
	
	public static void main(String[] args) {
		Ex04 littlePrince = new Ex04("어린왕자", "생텍쥐페리");
		
		Ex04 loveStory = new Ex04("춘향전");
		System.out.println(littlePrince.title + " " + littlePrince.author);
		System.out.println(loveStory.title + " " + loveStory.author);
	}
}
