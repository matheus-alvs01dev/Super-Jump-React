import dog from '../../images/dog.gif';
import './style.css';


function Dog() {
return ( 
    <img src={dog} alt='dog' className='dogImage'></img>
    )
}

export default Dog;
