
/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/



package {
import TopLevel;
import src.navigation.*;
import src.utils.*;
import caurina.transitions.Tweener;

public class main extends TopLevel {
		var accord:accordion;
		public function main() {
			
			var accordV = new accordion(185, 340,1, 35,25,true);
			
			accordV.addPanel(new membrane, new membcontent );
			accordV.addPanel(new channel, new channelContent);
			accordV.addPanel(new stimuli, new stimuluscontent);
			accordV.addPanel(new drugs, new Drugscontent);

			accordV.openPanel(1);
			addChild(accordV);
			
			//accordV.y=10;
			accordV.y=160
			accordV.x=600
			
			
			
			/*accord = new accordion(400, 300,4, 20,20,false);
			addChild(accord);
			accord.addPanel(new navpanelH, new contents);
			accord.addPanel(new navpanelH, new contents);
			accord.addPanel(new navpanelH, new contents);
			accord.addPanel(new navpanelH, new contents);
			accord.openPanel(1);*/
			
			
			
			
		}
	}
}