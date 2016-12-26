#pragma strict

var check2: String;
var player: GameObject;
var obstacle: GameObject;
var old_pos: float;
var current_pos: float;
var xPos: float;

function OnMouseEnter(){
	check2 = "True";
}
function OnMouseExit(){
	check2 = "False";
}

function OnMouseDown(){
	player.transform.GetComponent.<Rigidbody2D>().velocity.x = 100;

}

function Start () {
	player = GameObject.FindGameObjectWithTag("Ball");
	obstacle = GameObject.FindGameObjectWithTag("ObstacleClone");
	xPos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x;
	transform.position = new Vector3(xPos-15, 7.5, 0);
}

function Update () {
	if(player.transform.GetComponent.<Rigidbody2D>().velocity.x >= 50){
		Physics.IgnoreCollision(player.GetComponent.<Collider>(), obstacle.GetComponent.<Collider>());
	}
	current_pos = player.transform.position.x;
}