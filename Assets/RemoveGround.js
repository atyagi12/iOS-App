#pragma strict

var previousGround: GameObject;
var theBall: GameObject;

function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball");
}

function Update () {
	previousGround = GameObject.FindGameObjectWithTag("Ground");
	if(previousGround.transform.position.x < theBall.transform.position.x - 20){
		Destroy(previousGround);
	}
}