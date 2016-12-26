﻿using UnityEngine;
using System.Collections;

public class Tiling : MonoBehaviour {

	public int offsetX = 2;						//the offset so that we don't get any weird errors
	
	//these are used for checking if we need to instantiate stuff
	public bool hasARightBuddy = false;			
	public bool hasALeftBuddy = false;
	
	public bool reverseScale = false;			//used if the object is not tilable
	
	private float spriteWidth = 0f;				//the width of our element
	private Camera cam;
	private Transform myTransform;
	
	void Awake(){
		cam = Camera.main;
		myTransform = transform;
	}
	
	// Use this for initialization
	void Start () {
		SpriteRenderer sRenderer = GetComponent<SpriteRenderer>();
		spriteWidth = sRenderer.sprite.bounds.size.x;
		
	}
	
	// Update is called once per frame
	void Update () {
		//does it still need buddies? if not do nothing
		if(hasALeftBuddy == false || hasARightBuddy == false){
			//calculate the cameras extend (half the width) of what the camera can see in world coordinates
			float camHorizontalExtend = cam.orthographicSize*Screen.width/Screen.height;
			
			//calculate the x position where the camera can see the edge of the sprite (element)
			float edgeVisiblePositionRight = (myTransform.position.x+spriteWidth/2)-camHorizontalExtend;
			float edgeVisiblePositionLeft = (myTransform.position.x - spriteWidth/2) + camHorizontalExtend;
			
			//Checking if we can see the edge of the element and then calling MakeNewBuddy if we can
			if(cam.transform.position.x >= edgeVisiblePositionRight-offsetX && hasARightBuddy == false){
				MakeNewBuddy(1);
				hasARightBuddy = true;
			}
			else if(cam.transform.position.x <= edgeVisiblePositionLeft + offsetX && hasALeftBuddy == false){
				MakeNewBuddy(-1);
				hasALeftBuddy = true;
			}
		}
	}
	
	//a function that creates a buddy on the side required
	void MakeNewBuddy(int RightOrLeft){
		//Calculating the new position for our new buddy
		Vector3 newPosition = new Vector3 (myTransform.position.x + spriteWidth*RightOrLeft, myTransform.position.y, myTransform.position.z);
		//instantiating our new body and storing it in a variable
		Transform newBuddy =  Instantiate(myTransform,newPosition,myTransform.rotation) as Transform;
//		newBuddy.tag = "GroundClone";
		//if not tilable let's reverse the x size of our object to get rid of seams
		if(reverseScale == true){
			newBuddy.localScale = new Vector3 (newBuddy.localScale.x *-1, newBuddy.localScale.y, newBuddy.localScale.z);
		}
		
		newBuddy.parent = myTransform.parent;
		
		if(RightOrLeft>0){
			newBuddy.GetComponent<Tiling>().hasALeftBuddy = true;
		}else{
			newBuddy.GetComponent<Tiling>().hasARightBuddy = true;
		}
	}
}