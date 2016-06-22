#pragma strict

var style: GUIStyle;

function Awake(){
	Time.timeScale = 1.0;
}


function Start () {
	style = new GUIStyle();
	style.fontSize = 25;
	style.font = Resources.Load("vahika");
	style.normal.textColor = Color.white;
}

function Update () {


}

function OnGUI(){
	
	
	GUI.Label(new Rect(Screen.width/2+140, 25, 100, 100), ""+ "High Score: " + PlayerPrefs.GetInt("HighScore"), style);
}
