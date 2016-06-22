#pragma strict

var paused: boolean = false;
var pause: KeyCode;
var sound: GameObject;
var soundManager: GameObject;
//var unpause: KeyCode;

function Awake(){
	Time.timeScale = 1.0;
	Application.targetFrameRate = 70;
	DontDestroyOnLoad(GameObject.FindGameObjectWithTag("Toggle"));
}

function Start () {
	sound = GameObject.FindGameObjectWithTag("Toggle");
	sound.renderer.enabled=false;
	soundManager = GameObject.FindGameObjectWithTag("Sound");
//	PlayerPrefs.DeleteAll();
	if(sound.GetComponent(SoundToggle).soundcheck==true){
		soundManager.audio.Stop();
	}
}

function Update () {
	
	
	if(Input.GetKeyDown(pause)){
	
		if(!paused){
			Time.timeScale = 0.0;
			paused = true;
		}else{
			paused = false;
			Time.timeScale = 1.0;
		}
		
	}
}