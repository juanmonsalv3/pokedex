import ReactDOM from 'react-dom';
import classnames from 'tailwindcss-classnames';
import img from '../../assets/pikabye.gif';

const ErrorMessage = ({ fullContainer }) => {
  const content = (
    <div
      className={classnames(
        'flex grow justify-center',
        fullContainer && 'position absolute h-screen w-screen opacity-75',
      )}
    >
      <img src={img} alt="Loading" className="m-auto flex w-40 " />
    </div>
  );

  if (fullContainer) {
    return ReactDOM.createPortal(
      content,
      document.getElementById('loader-fullpage'),
    );
  }
  return content;
};

export default ErrorMessage;
