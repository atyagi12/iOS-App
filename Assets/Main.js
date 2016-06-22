#pragma strict
var sound: GameObject;
function Start () {
	sound = GameObject.FindGameObjectWithTag("Toggle");
}

function OnMouseDown(){
	if(Input.GetMouseButtonDown(0)){

		Application.LoadLevel("Starting");
		Destroy(sound);
	}
}

function Update () {

}