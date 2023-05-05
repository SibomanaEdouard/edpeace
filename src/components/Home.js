import flower from '../images/flower.jpeg';

function Images() {
    
    return (
      <div>
        <img src={flower} alt='This is the flower' className='image' />
      </div>
    );
  }

export const Home = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        window.location.href = '/sign/login';
      };
    return (
        <>
        <h1 className='enjoy'>ENJOY WITH FRIENDS</h1>
        <Images/>

        <button className='button1' onClick={handleLogin}>
          WELCOME
        </button>
        </>
    )
}