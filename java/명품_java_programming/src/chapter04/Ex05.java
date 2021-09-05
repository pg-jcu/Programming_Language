package chapter04;

public class Ex05 {
	String title;
	String author;
	
	void show() { System.out.println(title + " " + author); }
	
	public Ex05() {
		this("", "");
		System.out.println("생성자 호출됨");
	}
	
	public Ex05(String title) {
		this(title, "작자미상");
	}
	
	public Ex05(String title, String author) {
		this.title = title;
		this.author = author;
	}
	
	public static void main(String[] args) {
		//Ex05 littlePrince = new Ex05("어린왕자", "생텍쥐페리");
		Ex05 loveStory = new Ex05("춘향전");
		//Ex05 emptyBook = new Ex05();
		loveStory.show();
	}
}
