#pragma strict

var moveDown: KeyCode;

var speed: float = 10;

var initialPos: int;
var TravelDistance: int;
var angle : Vector3 ;
var explosion: GameObject;
var Button: GameObject;
var Boost: GameObject;
var Slow: GameObject;
var style: GUIStyle;
var other: PauseButton;
var other2: BoostControl;
var other3: TimeSlow;
var checking: String;
var checking2: String;
var checking3: String;

function Awake(){
//	DontDestroyOnLoad(this);
}

function Start () {
//	yield WaitForSeconds(2);
	style = new GUIStyle();
	style.font = Resources.Load("vahika");
	style.fontSize = 25;
	style.normal.textColor = Color.white;
	Button = GameObject.FindGameObjectWithTag("Pause");
	Boost = GameObject.FindGameObjectWithTag("BoostButton");
	Slow = GameObject.FindGameObjectWithTag("SlowButton");
	other = Button.GetComponent("PauseButton");
	other2 = Boost.GetComponent("BoostControl");
	other3 = Slow.GetComponent("TimeSlow");
	initialPos = transform.position.x; 
	GoBall();
}

function GoBall(){

	angle = Quaternion.AngleAxis(50, Vector3.forward)*Vector3.right;
//	rigidbody2D.AddForce(angle*70);


}

function OnCollisionEnter2D(colInfo:Collision2D){
	

	if(colInfo.collider.tag == "ObstacleClone"){
		var xPos = transform.position.x;
		var yPos = transform.position.y;
		var zPos = transform.position.z;
		GetComponent.<Rigidbody2D>().isKinematic = true;
		transform.GetComponent.<Renderer>().enabled = false;
		colInfo.collider.GetComponent.<Renderer>().enabled = false;
		Instantiate (explosion,Vector3(xPos, yPos, zPos), Quaternion.identity);
		
		yield WaitForSeconds(0.2);
		Application.LoadLevel("GameOver");
	}
}

function Update () {

checking = other.check;
checking2 = other2.check2;
checking3 = other3.check3;

TravelDistance = transform.position.x - initialPos;
	if(Input.GetMouseButtonDown(0) && !checking.Equals("True")&& !checking2.Equals("True")&& !checking3.Equals("True")){
		GetComponent.<Rigidbody2D>().velocity.y = speed*-10;
	}

	
	if(TravelDistance > PlayerPrefs.GetInt("HighScore")){
		PlayerPrefs.SetInt("HighScore", TravelDistance);
		PlayerPrefs.Save();
	
	}

}



function OnGUI(){

	GUI.Label(new Rect(Screen.width/2-150, 25, 100, 100), ""+ TravelDistance, style);
	GUI.Label(new Rect(Screen.width/2+130, 25, 100, 150), ""+ "High Score: " + PlayerPrefs.GetInt("HighScore"), style);
}
