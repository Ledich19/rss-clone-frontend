import './questions.scss';
import { useAppSelector } from '../../../app/hooks';

const Questions = () => {
  const { questions } = useAppSelector((state) => state.rules);
  return (
    <>
      <h4 className="qa__title">{questions.title}</h4>
      {questions.text.map((item, index) => (
        <div className='qa__item' key={index}>
          <h6 className="qa__question">{item.question}</h6>
          <p className="qa__answer">{item.answer}</p>
        </div >
      ))}
    </>
  );
};

export default Questions;
