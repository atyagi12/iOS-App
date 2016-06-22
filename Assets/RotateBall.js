#pragma strict


var mainCam: GameObject;
var radius: Vector3;
var roation: Quaternion;

function Start () {
	mainCam = GameObject.FindGameObjectWithTag("MainCamera");
	
}

function Update () {
	transform.RotateAround(mainCam.transform.position, 0.5*Vector3.forward, 60*Time.deltaTime );
}