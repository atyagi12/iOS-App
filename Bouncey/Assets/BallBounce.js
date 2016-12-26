#pragma strict

var theBall: GameObject;
var angle : Vector3 ;

function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball");
	angle = Quaternion.AngleAxis(37.5, Vector3.forward)*Vector3.right;

}

function OnCollisionEnter2D(colInfo:Collision2D){
		if(colInfo.collider.tag == "Ball"){
		theBall.GetComponent.<Rigidbody2D>().velocity = Vector3.zero;
		theBall.GetComponent.<Rigidbody2D>().AddForce(angle*70);

	}
}

function Update () {

}