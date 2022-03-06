import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Frankfurter ball tip bacon jowl flank. Turkey meatloaf flank, corned
            beef beef pancetta burgdoggen boudin shankle swine kielbasa ribeye
            doner tail pork. Strip steak pork loin drumstick meatloaf. Chicken
            chislic andouille turkey corned beef turducken leberkas, pastrami
            drumstick.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
