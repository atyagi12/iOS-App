
#pragma strict

public var speed: int;
public var initialBallPos: int;
public var initialCamPos: int;
public var distance:int;
public var theBall: GameObject;

function Start () {
//	yield WaitForSeconds(2);
	initialCamPos = transform.position.x;
	theBall = GameObject.FindGameObjectWithTag("Ball");
	initialBallPos = theBall.transform.position.x;
	distance = initialCamPos-initialBallPos;
	GoCam();
	
}

function GoCam(){
//	rigidbody2D.velocity = transform.right*speed;
	transform.position.x = theBall.transform.position.x + distance;
}

function Update () {
	transform.position.x = theBall.transform.position.x + distance;
//	rigidbody2D.velocity = transform.right*speed;
}