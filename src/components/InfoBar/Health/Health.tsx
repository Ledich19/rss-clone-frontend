import Heart from './Heart';

interface Props {
  health: number
}

const Health = (props: Props) => (
    <div className="health" >
      <Heart />
    </div>
);
export default Health;
