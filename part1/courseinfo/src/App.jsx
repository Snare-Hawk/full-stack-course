const App0 = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<h1>{course}</h1>
			<p>
				{part1} {exercises1}
			</p>
			<p>
				{part2} {exercises2}
			</p>
			<p>
				{part3} {exercises3}
			</p>
			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
		</div>
	);
};

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	const array = props.parts.map((value) => (
		<Part part={value.name} exercises={value.exercises} key={value.name} />
	));
	return <div>{array}</div>;
};

const Total = (props) => {
	return (
		<p>
			Total Exercises:{" "}
			{props.parts[0].exercises +
				props.parts[1].exercises +
				props.parts[2].exercises}
		</p>
	);
};

const App1 = () => {
	// const-definitions
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				parts={[part1, part2, part3]}
				exercises={[exercises1, exercises2, exercises3]}
			/>
			<Total exercises={[exercises1, exercises2, exercises3]} />
		</div>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
