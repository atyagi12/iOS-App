#pragma strict

var theBall: GameObject;
var angle : Vector3 ;

function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball");
	angle = Quaternion.AngleAxis(37.5, Vector3.forward)*Vector3.right;

}

function OnCollisionEnter2D(colInfo:Collision2D){
		if(colInfo.collider.tag == "Ball"){
		theBall.rigidbody2D.velocity = Vector3.zero;
		theBall.rigidbody2D.AddForce(angle*70);

	}
}

function Update () {

}