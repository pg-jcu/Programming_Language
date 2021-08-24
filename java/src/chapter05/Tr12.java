package chapter05;
/*import java.util.Scanner;

abstract class Shape {
	private Shape next;
	public Shape() { next = null; }
	public void setNext(Shape obj) { next = obj; }
	public Shape getNext() { return next; }
	public abstract void draw();
}

class Line extends Shape {
	public void draw() {
		System.out.println("Line");
	}
}

class Rect extends Shape {
	public void draw() {
		System.out.println("Rect");
	}
}

class Circle extends Shape {
	public void draw() {
		System.out.println("Circle");
	}
}

class GraphicEditor {
	private Shape start, last;
	private Scanner scanner;
	public GraphicEditor() {
		start = null;
		last = null;
		scanner = new Scanner(System.in);
		System.out.println("그래픽 에디터 beauty을 실행합니다.");
	}
	public void run() {
		while(true) { 
			System.out.print("삽입(1), 삭제(2), 모두보기(3), 종료(4)>>");
			int num = scanner.nextInt();
			if(num == 1) {
				System.out.print("Line(1), Rect(2), Circle(3)>>");
				num = scanner.nextInt();
				insert(num);
			}
			else if(num == 2) {
				System.out.print("삭제할 도형의 위치>>");
				num = scanner.nextInt();
				delete(num);
			}
			else if(num == 3) {
				print();
			}
			else if(num == 4) {
				System.out.print("beauty을 종료합니다.");
				break;
			}
		}
	}
	 public void insert(int draw) { 
	      Shape shape;
	      switch(draw) {
	      case 1:
	    	 shape = new Line();
	         break;
	      case 2:
	    	 shape = new Rect();
	         break;
	      case 3:
	    	 shape = new Circle();
	         break;
	      default:
	         System.out.println("다시 입력해 주세요.");
	         return;
	      }
	      if(start == null) { 
	         start = shape; 
	         last = shape;
	      }
	      else {
	         last.setNext(shape);
	         last = shape; 
	      }
	   }
	   public void print() { 
	      Shape s = start;
	      while(s != null) {
	         s.draw();
	         s = s.getNext();
	      }
	   }
	   public void delete(int num) {
	      Shape cur = start; 
	      Shape tmp = start;
	      int i;
	      if(num == 1) { 
	         if(start == last) { 
	            start = null;
	            last = null;
	            return;
	         }
	         else { 
	            start = start.getNext();
	            return;
	         }
	      }
	      for(i=1; i<num; i++) {
	         tmp = cur; 
	         cur = cur.getNext(); 
	         if(cur == null) { 
	            System.out.println("삭제할 수 없습니다.");
	            return;
	         }
	      }
	      if(i==num) { 
	         tmp.setNext(cur.getNext());
	         last = tmp;
	      }
	      else 
	         tmp.setNext(cur.getNext());
	   }
}
public class Tr12 {

	public static void main(String[] args) {
		GraphicEditor graphiceditor = new GraphicEditor();
		graphiceditor.run();
	}

}*/
