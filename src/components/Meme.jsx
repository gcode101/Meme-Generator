
function Meme() {
	return (
		<main className="main--form">
			<form className="form">

				<div className="input--boxes">
					<input type="text" className="form--input" placeholder="Top text"/>
					<input type="text" className="form--input" placeholder="Bottom text"/>
				</div>
				<div className="form--button">
					<button>Get a new meme image 🖼</button>
				</div>
			</form>
		</main>
	);
}

export default Meme;