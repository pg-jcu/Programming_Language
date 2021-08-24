package chapter07;
import java.util.Scanner;
import java.util.Vector;

abstract class Shape {
	private Shape next;
	public Shape() { next = null;}
	public void setNext(Shape obj) {next = obj;} // 링크 연결
	public Shape getNext() {return next;}
	public abstract void draw();
}

class Line extends Shape {
	
	@Override
	public void draw() {
		 System.out.println("Line");
	}
}

class Rect extends Shape {

	@Override
	public void draw() {
		 System.out.println("Rect");
	}

}

class Circle extends Shape {
	
	@Override
	public void draw() {
		 System.out.println("Circle");
	}

}

public class Tr10 {
	private String editorName;
	private Scanner scanner = new Scanner(System.in);
	private Vector<Shape> v = new Vector<Shape>();
	
	public Tr10(String editorName) {
		this.editorName = editorName;
	}
	
	public void run() {
		System.out.println("그래픽 에디터 " + editorName + "을 실행합니다.");
		int choice = 0;
		while (choice != 4) { 
			int type, index;
			System.out.print("삽입(1), 삭제(2), 모두 보기(3), 종료(4)>>");
			choice = scanner.nextInt();
			switch (choice) {
				case 1:	// 삽입
					System.out.print("Line(1), Rect(2), Circle(3)>>");
					type = scanner.nextInt();
					if (type < 1 || type > 3) {
						System.out.println("잘못 선택하셨습니다.");
						break;
					}
					insert(type);
					break;
				case 2:	// 삭제
					System.out.print("삭제할 도형의 위치>>");
					index = scanner.nextInt();
					if (!delete(index)) {
						System.out.println("삭제할 수 없습니다.");
					}
					break;
				case 3:	// 모두 보기
					view();
					break;
				case 4:	// 끝내기
					break;
				default:
					System.out.println("잘못 입력하셨습니다.");
			}
		}
		System.out.println(editorName + "을 종료합니다.");	
	}

	private void view() {
		for(int i=0; i<v.size(); i++) v.get(i).draw();
	}
	
	private boolean delete(int index) {
		if (v.size() == 0 || index >= v.size()) // 리스트가 비거나, 인덱스에 도형이 없는 경우
			return false;
		v.remove(index);
		return true;
	}

	private void insert(int choice) {
		Shape shape=null;
		switch (choice) {
			case 1: // Line
				shape = new Line();
				 break;
			case 2: // Rect
				shape = new Rect();
				break;
			case 3: // Circle
				shape = new Circle();
		}
		v.add(shape);
	}
	
	public static void main(String [] args) {
		Tr10 ge = new Tr10("beauty");
		ge.run();
	}
}
