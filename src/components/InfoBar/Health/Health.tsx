import Heart from './Heart';
import './Health.scss';

interface Props {
  health: number
}

const Health = (props: Props) => {
  const size: number[] = new Array(props.health).fill(0);
  return (
    <div className="health" >
      {size.map((el, idx) => (
          <Heart key={idx}/>
      ))}
    </div>
  );
};
export default Health;
