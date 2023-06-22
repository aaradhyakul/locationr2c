const lat = document.getElementById("latitude");
const long = document.getElementById("longitude");
const alt = document.getElementById("altitude");
const speed = document.getElementById("speed");

const geoCheck = ()=>{if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition((pos)=>{
		lat.textContent = pos.coords.latitude;
		long.textContent = pos.coords.longitude;
		alt.textContent = pos.coords.altitude===null?"No altitude system support" : pos.coords.altitude;
		speed.textContent = pos.coords.speed===null?"No speed system support" : pos.coords.speed;
	});
	setTimeout(()=>{
		geoCheck();
		console.log("update");
	},200)
}
else{
	console.log("use IP approximation");
}

}
geoCheck();
