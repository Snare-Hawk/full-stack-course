const Hello = (props) => {
	console.log(props);
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} years old.
			</p>
		</div>
	);
};

const Footer = () => {
	return [<p>damb</p>, <p>balls</p>];
};

const balls = () => {
	const friends = [
		{ name: "Peter", age: 4 },
		{ name: "Maya", age: 10 },
	];

	const array = [];
	for (let index = 0; index < friends.length; index++) {
		const element = friends[index];
		array.push(<Hello name={friends[index].name} age={friends[index].age} />);
	}
	return array;
};

const App = () => {
	const friends = [
		{ name: "Peter", age: 4 },
		{ name: "Maya", age: 10 },
	];

	return (
		<div>
			{/* <p>{friends}</p> */}
			<Hello name={friends[0].name} age={friends[0].age} />
		</div>
	);
};

export default balls;
