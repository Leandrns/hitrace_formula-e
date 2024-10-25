import { Link } from 'react-router-dom';
import './style.css';

const Button = ({ text, isActive, path }) => { 
    return (
            <Link to={path} className={isActive ? 'link-button active' : 'link-button'}>
                <button className='nav-button'>{text}</button>
            </Link>
    );
};

export default Button; 
