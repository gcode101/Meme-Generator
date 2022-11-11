
import React from "react";
import memesData from "../memesData.js";


function Meme() {

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage(e) {
		e.preventDefault();
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

	function handleChange(e) {
		const {name, value} = e.target;
		setMeme(prevMeme => {
			return ({
				...prevMeme,
				[name]: value
			});
		});

	}

	return (
		<main className="main--form">
			<form className="form">

				<div className="input--boxes">
					<input 
						type="text" 
						onChange={handleChange} 
						className="form--input" 
						placeholder="Top text"
						name="topText"
						value={meme.topText}
					/>
					<input 
						type="text" 
						onChange={handleChange} 
						className="form--input" 
						placeholder="Bottom text"
						name="bottomText"
						value={meme.bottomText}
					/>
				</div>
				<div className="form--button">
					<button onClick={getMemeImage}>Get a new meme image 🖼</button>
				</div>
			</form>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image"/>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
			
		</main>
	);
}

export default Meme;