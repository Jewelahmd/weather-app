window.addEventListener('load', ()=>{
	let long;
	let lat;
	let tempdescription =document.querySelector(".temp-description");
	let tempdegree =document.querySelector(".temp-degree");
	let locatimezone =document.querySelector(".loca-timezone");
	let tempsection =document.querySelector(".temp");
	const tempspan = document.querySelector(".temp span")

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition (position =>{
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const proxy = 'https://cors-anywhere.herokuapp.com/'
			const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
			fetch(api)
			.then(response =>{
				return response.jason();
			})
			.then(data=>{
				const{ temperature,summary,icon } = data.currently;
				//set DOM element from API
				tempdegree.textContent = temperature;
				tempdescription.textContent= summary;
				locatimezone.textContent=data.timezone;
				let celsius =(temp -32 ) * (5/9);
				setIcons(icon,document.querySelector(".icon"));
				tempsection.addEventListener("click", ()=>{
					if (tempspan.textContent ==== 'F') {
						empspan.textContent = 'C';
						temp-degree.textContent = Math.floor(celsius);
					}else{
						empspan.textContent = 'F';
						temp-degree.textContent = temperature;
					}
				});
			});
		});
	}
	function setIcons(icon,iconID)
	{
		const skycons = new Skycons({color:"white"});
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		skycons.set(iconID,skycons[currentIcon]);

	}
});