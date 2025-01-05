
const Description = (props) => {
    return ( 
        <div className='description'>
            <div className='section'>
                <h2 id='historia' onClick={props.subject}>historia</h2>
                <div className='article'>Pytania z historii powszechnej.</div>
                <h2 id='fizyka' onClick={props.subject}>fizyka</h2>
                <div className='article'>Pytania z fizyki ogólnej o różnym stopniu trudności.</div>
                <h2 id='żeglarstwo' onClick={props.subject}>żeglarstwo</h2>
                <div className='article'>Pytania z bazy pytań PZŻ na egzamin JSM. Nie wszystkie odpowiedzi zaznaczone jako poprawne zostały zweryfikowane kluczem egzaminacyjnym. Poprawne odpowiedzi zostały zaznaczone w czasie przygotowywania się do - zdanego - egzaminu. Możesz pomóc w ewentualnych korektach odpowiedzi przesyłając swoje uwagi na adres: <p style={{color: 'blue', textAlign: 'center'}}>jerzy.kunicki@gmail.com</p></div>
            </div>
        </div>
     );
}
 
export default Description;