#pragma strict

var soundcheck: boolean = false;
var soundManager: GameObject;

function Awake(){
	DontDestroyOnLoad(this.gameObject);
}

function Start () {
	soundManager = GameObject.FindGameObjectWithTag("Sound");
}

function OnMouseDown(){
//	if(Input.GetKeyDown(pause)){
	
		if(!soundcheck){
			soundManager.GetComponent.<AudioSource>().Stop();
			soundcheck = true;
		}else{
			soundcheck = false;
			soundManager.GetComponent.<AudioSource>().Play();
		}
		
//	}
}


function Update () {

}