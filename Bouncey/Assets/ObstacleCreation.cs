using UnityEngine;
using System.Collections;

public class ObstacleCreation : MonoBehaviour {
	
	public GameObject obstacle;
	public GameObject theBall;
	public Camera cam;
		
	public float ballheight;
	public float ballX;
	public float camheight;
	public float camlength;
	public float initialPos;
	public int count=10;
	
	void Start(){
		theBall = GameObject.FindGameObjectWithTag("Ball");
		initialPos = theBall.transform.position.x;
		camheight = cam.orthographicSize*2f;
		camlength = camheight*cam.aspect;
		InvokeRepeating("SpawnObstacle",1f,0.5f);
//		StartCoroutine(spawn());
		
	}
	
	void SpawnObstacle(){
		
		ballheight = theBall.transform.position.y;
		ballX = theBall.transform.position.x-initialPos;
		float randomcordY = Random.Range(0, ballheight);
		float randomcordX = Random.Range (ballX*1f+20f, ballX*1.5f+20f);
		GameObject clone = (GameObject)Instantiate (obstacle,new Vector3(randomcordX,randomcordY,0), Quaternion.identity);
		clone.tag = "ObstacleClone";
//		StartCoroutine(Timer());
		
		
		KillObstacle();
	}
	
	IEnumerator Timer(){
		yield return new WaitForSeconds(2);
	}
	
	public void KillObstacle(){
		GameObject obstacle;
		obstacle = GameObject.FindGameObjectWithTag("ObstacleClone");
		float currBallPosX = theBall.transform.position.x;
		float obstaclePosX = obstacle.transform.position.x;
		if(obstaclePosX < currBallPosX-10f){
			Destroy(obstacle);
		}
	}
		
}
