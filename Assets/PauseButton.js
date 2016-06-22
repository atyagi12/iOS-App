#pragma strict


var paused: boolean = false;
var check: String;
var xPos: int;

function OnMouseEnter(){
	check = "True";
}
function OnMouseExit(){
	check = "False";
}


function OnMouseDown(){
//	if(Input.GetKeyDown(pause)){
	
		if(!paused){
			Time.timeScale = 0.0;
			paused = true;
		}else{
			paused = false;
			Time.timeScale = 1.0;
		}
		check = "True";
//	}
}

function Start () {
	xPos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x;
	transform.position = new Vector3(xPos, 8.5, 0);
}

function Update () {
//	if(Input.GetMouseButtonDown(0)){
//	
//		if(!paused){
//			Time.timeScale = 0.0;
//			paused = true;
//		}else{
//			paused = false;
//			Time.timeScale = 1.0;
//		}
//		
//	}
}