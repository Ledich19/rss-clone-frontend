import { useAppDispatch } from '../app/hooks';
import { removeNotify, setNotify } from '../reducers/notifyReducer';

const useSetNotify = () => {
  const dispatch = useAppDispatch();
  const setTime = (notify: { type: string; text: string }) => {
    dispatch(setNotify(notify));
    setTimeout(() => {
      dispatch(removeNotify());
    }, 5000);
  };
  return setTime;
};
export default useSetNotify;
