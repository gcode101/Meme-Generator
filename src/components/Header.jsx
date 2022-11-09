import trollface from '../Trollface.webp';

function Header() {
	return (
		<header className="header">
			<img src={trollface} className="trollface" alt='trollface'/>
			<h1 className="header--title">Meme Generator</h1>
			<h4 className="header--project">React Course - Project 3</h4>
		</header>
	);
}

export default Header;