import React from 'react';
import './ChooseAmount.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setAmount } from '../../reducers/playersReducer';

const ChooseAmount = () => {
  const dispatch = useAppDispatch();
  const { amount } = useAppSelector((state) => state.characters);
  const { characters } = useAppSelector((state) => state.gameSet.cards);

  const handleEmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const num = parseInt(value, 10);
    if ((num < characters.length && num > 1) || value === '') {
      dispatch(setAmount(value));
    }
  };
  const handlePlus = () => {
    const num = parseInt(amount, 10);
    if (num < characters.length) dispatch(setAmount((num + 1).toString()));
  };
  const handleMinus = () => {
    const num = parseInt(amount, 10);
    if (num > 1) dispatch(setAmount((num - 1).toString()));
  };
  return (
    <label className="amount-label">
      Количество игроков
      <div className="amount">
        <button onClick={handleMinus} className="amount__btn">
          -
        </button>
        <input onChange={handleEmount} className="amount__input" type="number" value={amount} />
        <button onClick={handlePlus} className="amount__btn">
          +
        </button>
      </div>
    </label>
  );
};
export default ChooseAmount;
