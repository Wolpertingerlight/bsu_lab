import React, { useState } from 'react';
import "./Test.css"
import {CButton} from "@coreui/react";

function Test() {
    const questions = [
        {
            questionText: 'К причинам Смуты не относится:',
            answerOptions: [
                { answerText: 'разорение крестьянских хозяйств в годы опричнины', isCorrect: true },
                { answerText: 'разруха, вызванная Ливонской войной', isCorrect: false },
                { answerText: 'падение авторитета власти', isCorrect: false },
                { answerText: 'появление Лжедмитрия I', isCorrect: false },
            ],
        },
        {
            questionText: 'Период Смутного времени начался в:',
            answerOptions: [
                { answerText: 'конце XIV-начале XV вв.', isCorrect: true },
                { answerText: 'конце XV-начале XVI вв.', isCorrect: true },
                { answerText: 'конце XVI-начале XVII вв.', isCorrect: false },
                { answerText: 'не знаю', isCorrect: false },
            ],
        },
        {
            questionText: 'Польские феодалы оказали поддержку Лжедмитрию I, потому что:',
            answerOptions: [
                { answerText: 'поверили, что он царевич Дмитрий', isCorrect: true },
                { answerText: 'хотели установить союзнические отношения с Россией', isCorrect: false },
                { answerText: 'преследовали цель захватить в России большие территории', isCorrect: false },
                { answerText: 'хотели оказать помощь боярам в борьбе с крестьянами', isCorrect: false },
            ],
        },
        {
            questionText: 'В борьбе с "тушинским вором" правительство Василия Шуйского делало основную ставку:',
            answerOptions: [
                { answerText: 'на дворянское ополчение', isCorrect: false },
                { answerText: 'казаков', isCorrect: false },
                { answerText: 'шведских наемников', isCorrect: false },
                { answerText: 'народное ополчение', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    Результат: {score} из {questions.length}
                    <CButton color="dark" onClick={refreshPage}>Пройти тест заново</CButton>

                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Вопрос  {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (

                            <CButton color="dark" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</CButton>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Test;