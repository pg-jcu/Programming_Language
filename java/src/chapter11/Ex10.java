package chapter11;
import javax.swing.*;
import java.awt.*;

public class Ex10 extends JFrame {
	private String [] fruits = {"apple", "banana", "kiwi", "mango", "pear", "peach", "berry",
			"strawberry", "blackberry"};
	private ImageIcon [] images = { new ImageIcon("images/image0.jpg"),
									new ImageIcon("images/image1.jpg"),
									new ImageIcon("images/image2.jpg"),
									new ImageIcon("images/image3.jpg") };
	
	public Ex10() {
		setTitle("리스트 만들기 예제");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container c = getContentPane();
		c.setLayout(new FlowLayout());
		
		JList<String> strList = new JList<String>(fruits);
		c.add(strList);
		
		JList<ImageIcon> imageList = new JList<ImageIcon>();
		imageList.setListData(images);
		c.add(imageList);
		
		JList<String> scrollList = new JList<String>(fruits);
		c.add(new JScrollPane(scrollList));
		
		setSize(300,300);
		setVisible(true);
		
	}

	public static void main(String[] args) {
		new Ex10();

	}

}
