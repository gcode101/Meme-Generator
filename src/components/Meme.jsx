
import React from "react";
import memesData from "../memesData.js";


function Meme() {

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => {
			return ({
				...prevMeme,
				randomImage: url
			});	
		});
	}

	return (
		<main className="main--form">
			<form className="form">

				<div className="input--boxes">
					<input type="text" className="form--input" placeholder="Top text"/>
					<input type="text" className="form--input" placeholder="Bottom text"/>
				</div>
				<div className="form--button">
					<button onClick={getMemeImage}>Get a new meme image 🖼</button>
				</div>
			</form>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image"/>
				
				<h2 className="meme--text top">One does not simply</h2>
				<h2 className="meme--text bottom">Walk into mordor</h2>
			</div>
			
		</main>
	);
}

export default Meme;