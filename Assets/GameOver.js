#pragma strict




function OnCollisionEnter2D(colInfo:Collision2D){
	
	if(colInfo.collider.tag == "Ball"){

		Application.LoadLevel("GameOver");
	}	

}
