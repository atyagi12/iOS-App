#pragma strict
var sound: GameObject;
var soundManager: GameObject;


function Start () {
	sound = GameObject.FindGameObjectWithTag("Toggle");
//	sound.renderer.enabled=false;
	soundManager = GameObject.FindGameObjectWithTag("Sound");
	if(sound.GetComponent(SoundToggle).soundcheck==true){
		soundManager.GetComponent.<AudioSource>().Stop();
	}
}

function Update () {
//	Destroy(sound);
}