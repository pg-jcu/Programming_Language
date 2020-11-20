package chapter11;
import javax.swing.*;
import java.awt.*;

public class Ex12 extends JFrame {
	private String [] fruits = {"apple", "banana", "kiwi", "mango", "pear", "peach", "berry",
			"strawberry", "blackberry"};
	private String [] names = {"kitae", "jaemoon", "hyosoo", "namyun"};
	
	public Ex12() {
		setTitle("콤보박스 만들기 예제");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container c = getContentPane();
		c.setLayout(new FlowLayout());
		
		JComboBox<String> strCombo = new JComboBox<>(fruits);
		
		c.add(strCombo);
		
		JComboBox<String> nameCombo = new JComboBox<>();
		for(int i=0; i<names.length; i++)
			nameCombo.addItem(names[i]);
		
		c.add(nameCombo);
		setSize(300,300);
		setVisible(true);
	}

	public static void main(String[] args) {
		new Ex12();

	}

}
