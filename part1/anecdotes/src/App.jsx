const Hello = (props) => {
	console.log(props);
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old
			</p>
		</div>
	);
};

const Footer = () => {
	return [<h1>damb</h1>, <p>balls</p>];
};

const App = () => {
	const friends = ["Peter", "Maya"];

	return (
		<div>
			<p>{friends}</p>
		</div>
	);
};

export default App;
