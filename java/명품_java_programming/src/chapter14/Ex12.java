package chapter14;
import javax.sound.sampled.*;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.*;

public class Ex12 extends JFrame {
	private JButton btns[] = { new JButton("play"),
			new JButton("stop"),
			new JButton("play again")};
	private Clip clip;
	
	public Ex12() {
		setTitle("오디오 제어");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(300,150);
		Container c = getContentPane();
		c.setLayout(new FlowLayout());
		
		MyActionListener al = new MyActionListener();
		for(int i=0; i<btns.length; i++) {
			c.add(btns[i]);
			btns[i].addActionListener(al);
		}
		setVisible(true);
		loadAudio("audio/애국가1절.wav");
	}
	
	private void loadAudio(String pathName) {
		try {
			clip = AudioSystem.getClip();
			File audioFile = new File(pathName);
			AudioInputStream audioStream = AudioSystem.getAudioInputStream(audioFile);
			clip.open(audioStream);
		}
		catch (LineUnavailableException e) { e.printStackTrace(); }
		catch (UnsupportedAudioFileException e) { e.printStackTrace(); }
		catch (IOException e) {e.printStackTrace(); }
	}
	
	class MyActionListener implements ActionListener {
		public void actionPerformed(ActionEvent e) {
			switch(e.getActionCommand()) {
				case "play" : clip.start();
					break;
				case "stop" : clip.stop();
					break;
				case "play again" : 
					clip.setFramePosition(0);
					clip.start();
					break;
			}
		}
	}

	public static void main(String[] args) {
		new Ex12();

	}

}
