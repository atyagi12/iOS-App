#pragma strict

function Start () {
	Begin();
}

function Begin(){
	yield WaitForSeconds(3.0);
	Application.LoadLevel("Starting");
}

function Update () {

}