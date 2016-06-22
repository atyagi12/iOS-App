using UnityEngine;
using System.Collections;

public class BoostScript : MonoBehaviour {
	
	public GameObject player;
	public string check2;
	
	// Use this for initialization
	void Start () {
		player = GameObject.FindGameObjectWithTag("Ball");
	}
	
	void OnMouseEnter(){
		check2 = "True";
	}
	void OnMouseExit(){
		check2 = "False";
	}
	
	void OnMouseDown(){
		float y_pos = player.transform.position.y;
		player.transform.rigidbody2D.AddForce(new Vector2(0,100));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
