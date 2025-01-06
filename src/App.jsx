import React, { useState } from "react";
import "./styles/App.min.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Description from "./components/Description";

const App = () => {
	const [questions, setQuestions] = useState([]);
	const [corectCounter, setCorectCounter] = useState(0);
	const [answerCounter, setAnswerCounter] = useState(0);
	const [subject, setSubject] = useState("");
	const [title, setTitle] = useState("");

	const GetData = () => {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost/quiz/index_test1.php", true);
		xhr.send(JSON.stringify(subject));
		xhr.onload = () => {
			console.log(xhr.status);
			if (xhr.status === 200) {
				const questions = JSON.parse(xhr.response);

				setQuestions(questions);
				setSubject("");
			}
		};
	};

	const handleCheck = event => {
		if (event.target.value === questions[event.target.name].corectAns) {
			setCorectCounter(corectCounter + 1);
			setAnswerCounter(answerCounter + 1);
		} else {
			setAnswerCounter(answerCounter + 1);
		}
	};

	const handleButtonMenu = event => {
		let press = event.target.id;

		setTitle(press);
		if (press === "żeglarstwo") press = "sailing";

		setSubject(press);
	};

	const handleButtonReset = () => {
		setQuestions([]);
		setCorectCounter(0);
		setAnswerCounter(0);
		setSubject("");
		setTitle("");
	};
	const quiz = questions.map(item => {
		return (
			<div key={item.id} className='quiz'>
				<p className='question'>{`${item.id + 1}. ${item.pytanie}`}</p>
				{item.obrazek !== "" && <img src={item.obrazek} alt='question' />}
				<p className='answer'>
					<input
						type='radio'
						id={item.answers[0]}
						name={item.id}
						value={item.answers[0]}
						onChange={handleCheck}
					></input>
					{item.typ === "tekst" ? (
						<label>{item.answers[0]}</label>
					) : (
						<label>
							<img src={item.answers[0]} alt='picture_a' />
						</label>
					)}
				</p>
				<p className='answer'>
					<input
						type='radio'
						id={item.answers[1]}
						name={item.id}
						value={item.answers[1]}
						onChange={handleCheck}
					></input>
					{item.typ === "tekst" ? (
						<label>{item.answers[1]}</label>
					) : (
						<label>
							<img src={item.answers[1]} alt='picture_b' />
						</label>
					)}
				</p>
				<p className='answer'>
					<input
						type='radio'
						id={item.answers[2]}
						name={item.id}
						value={item.answers[2]}
						onChange={handleCheck}
					></input>
					{item.typ === "tekst" ? (
						<label>{item.answers[2]}</label>
					) : (
						<label>
							<img src={item.answers[2]} alt='picture_c' />
						</label>
					)}
				</p>
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className='wraper'>
				<div className='header'>
					<Header title={title} />
				</div>
				{title && <Menu reset={handleButtonReset} />}
				{title && (
					<div className='corectCounter'>{`Twój wynik: odpowiedzi poprawnych ${corectCounter} / ${answerCounter}`}</div>
				)}
				{subject && GetData()}
				{!title && <Description subject={handleButtonMenu} />}
				{title && <div className='quizWraper'>{quiz}</div>}
			</div>
		</React.Fragment>
	);
	// }
};

export default App;
