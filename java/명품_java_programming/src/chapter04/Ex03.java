package chapter04;

public class Ex03 {
	int radius;
	String name;
	
	public Ex03() {
		radius = 1; name = "";
	}
	
	public Ex03(int r, String n) {
		radius = r; name = n;
	}
	
	public double getArea() {
		return 3.14*radius*radius;
	}
	
	public static void main(String[] args) {
		Ex03 pizza = new Ex03(10, "자바피자");
		
		double area = pizza.getArea();
		System.out.println(pizza.name + "의 면적은 " + area);
		
		Ex03 donut = new Ex03();
		donut.name = "도넛피자";
		area = donut.getArea();
		System.out.println(donut.name + "의 면적은 " + area);
	}
}
