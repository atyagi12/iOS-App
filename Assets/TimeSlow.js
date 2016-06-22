#pragma strict

var check3: String;
var xPos: float;


function Start () {
	xPos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x;

	transform.position = new Vector3(xPos-15, 4.5, 0);
}

function OnMouseEnter(){
	check3 = "True";
}

function OnMouseExit(){
	Time.timeScale = 1.0;
	check3 = "False";
}

function OnMouseDrag(){
	Time.timeScale = 0.4;
}

function Update () {

}