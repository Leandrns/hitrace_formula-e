import './style.css';

const Button = ({ text, isActive, onClick }) => { 
    return (
        <button className={isActive ? 'nav-button active' : 'nav-button'}
                onClick={onClick}>
            {text}
        </button>
    );
};

export default Button; 
