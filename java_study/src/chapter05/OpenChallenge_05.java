package chapter05;
import java.util.Scanner;


abstract class GameObject { // 추상 클래스
	protected int distance; // 한 번 이동 거리
	protected int x, y; // 현재 위치(화면 맵 상의 위치)
	
	public GameObject(int startX, int startY, int distance) { // 초기 위치와 이동 거리 설정
		this.x = startX; this.y = startY;
		this.distance = distance;
	}
	public int getX() { return x; }
	public int getY() { return y; }
	public boolean collide(GameObject p) { // 이 객체가 객체 p와 충돌했으면 true 리턴
		if(this.x == p.getX() && this.y == p.getY())
			return true;
		else 
			return false;
	}
	
	protected abstract void move(); // 이동한 후의 새로운 위치로 x, y 변경
	protected abstract char getShape(); // 객체의 모양을 나타내는 문자 리턴
}



class Bear extends GameObject {
	private Scanner scanner;
	public Bear(int x, int y, int distance) {
		super(x, y, distance);
		scanner = new Scanner(System.in);
	}
	
	@Override
	public void move() {
		System.out.print("왼쪽(a), 아래(s), 위(d), 오른쪽(f) >> ");
		char c;
		c = scanner.next().charAt(0);
		switch(c) {
			case 'a' : // left
				x--; 
				if(x < 0) x = 0;
				break;
			case 'f' : // right
				x++; 
				if(x >= OpenChallenge_05.MAX_X) x = OpenChallenge_05.MAX_X - 1;
				break;
			case 'd' : // up
				y--; 
				if(y < 0) y = 0;
				break;
			case 's' : // down
				y++; 
				if(y >= OpenChallenge_05.MAX_Y) y = OpenChallenge_05.MAX_Y - 1;
				break;
		}		
	}
	
	@Override
	public char getShape() { // Bear의 모양 리턴
		return 'B';
	}
}

class Fish extends GameObject {
	public Fish(int x, int y, int distance) {
		super(x, y, distance); 
	}
	 
	@Override
	public void move() { // 한 번 움직이는 과정 전개
		int n = (int)(Math.random()*5); // 0,1,2,3,4 중에서 0인 경우 + 방향, 1인 경우 - 방향, 나머지 정지
		if(n==0) x += distance;
		else if(n==1) x -= distance;

		if(x < 0) x=0;
		if(x >= OpenChallenge_05.MAX_X) x = OpenChallenge_05.MAX_X - 1;
		 
		n = (int)(Math.random()*5);
		if(n==0) y += distance;
		else if(n==1) y -= distance;

		if(y < 0) y=0;
		if(y >= OpenChallenge_05.MAX_Y) y= OpenChallenge_05.MAX_Y - 1;
	}

	@Override
	public char getShape() { // Fish의 모양 리턴
		return '@';
	}
}


public class OpenChallenge_05 {
	public static final int MAX_X = 20;
	public static final int MAX_Y = 10;
	private char map [][] = new char [MAX_Y][MAX_X];
	private GameObject [] m = new GameObject[2];  //m[0] : Bear, m[1] : Fish
	int state; // 0: 게임 중, 1: Monster가 winner, 2:Human이 winner
	
	public OpenChallenge_05() {
		for(int i=0; i<MAX_Y; i++) 
			for(int j=0; j<MAX_X; j++)
				map[i][j] = '-';
		m[0] = new Bear(0, 0, 1);
		m[1] = new Fish(5, 5, 2);
		state = 0; // 게임 중
	}
	public void run() {
		System.out.println("** Bear의 Fish 먹기 게임을 시작합니다.**");;

		update(); // 초기 좌표에 따른 맵 설정
		
		draw(); // 초기 게임 맵을 보여줌

		while(!doesEnd()) {
			clear(); // 현재의 맵 지움
			for(int i=0; i<m.length; i++) 
				m[i].move();
			update(); // 움직인 후 좌표 변경에 따른 맵 갱신
			draw(); // 맵 그리기
		}
		System.out.println("Bear Wins!!");;
	}
	private void update() {
		for(int i=m.length-1; i>=0; i--) // Fish부터 먼저 그려서 Fish를 먹는 경우 Fish가 보이지 않기
			map[m[i].getY()][m[i].getX()] = m[i].getShape();
	}
	private void clear() {
		for(int i=0; i<m.length; i++) 
			map[m[i].getY()][m[i].getX()] = '-';
	}
	private void draw() {
		System.out.println();
		for(int i=0; i<MAX_Y; i++) {
			for(int j=0; j<MAX_X; j++)
				System.out.print(map[i][j]);
			System.out.println();
		}
	}
	private boolean doesEnd() {
		if(m[0].collide(m[1])) {// Bear ate Fish
			return true;
		}
		return false;
	}
	
	public static void main(String[] args) {
		OpenChallenge_05  game = new OpenChallenge_05();
		game.run();
	}

}
