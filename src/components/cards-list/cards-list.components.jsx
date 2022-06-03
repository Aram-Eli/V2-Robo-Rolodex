
import Card from '../card/card.components';
import './card-list.styles.css';

//React function only takes 2 props which is props and forwardRef 
const CardList = ({monsters}) => {
        // Destructuring
    // const { monsters } = props;
    // And we really don't need destructuring since am only going to use monsters as the only props
    // And we don't need the return() as this would be an implicit return
       <div className="card-list">
            {monsters.map((monster) => {
                return <Card monster={monster}/>;
            })}
        </div>
    }


export default CardList;