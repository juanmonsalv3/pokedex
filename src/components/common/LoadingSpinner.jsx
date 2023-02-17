import img from '../../assets/pikachu-running.gif';
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center grow'>
      <img
        src={img}
        alt='Loading'
        className='flex m-auto w-40 '
      />
    </div>
  );
};

export default LoadingSpinner;
