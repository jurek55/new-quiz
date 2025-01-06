const Quiz = ({ questions, handleCheck }) => {
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
	return quiz;
};

export default Quiz;
