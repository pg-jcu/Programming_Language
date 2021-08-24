package chapter11;
import javax.swing.*;
import java.awt.*;

public class Ex04 extends JFrame {
	public Ex04() {
		setTitle("체크박스 만들기 예제");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container c = getContentPane();
		c.setLayout(new FlowLayout());
		
		ImageIcon cherryIcon = new ImageIcon("images/image0.jpg");
		
		ImageIcon selectedCherryIcon = new ImageIcon("images/image2.jpg");
		
		JCheckBox apple = new JCheckBox("사과");
		JCheckBox pear = new JCheckBox("배", true);
		JCheckBox cherry = new JCheckBox("체리", cherryIcon);
		
		cherry.setBorderPainted(true);
		cherry.setSelectedIcon(selectedCherryIcon);
		
		c.add(apple);
		c.add(pear);
		c.add(cherry);
		
		setSize(250,300);
		setVisible(true);
	}

	public static void main(String[] args) {
		new Ex04();

	}

}
