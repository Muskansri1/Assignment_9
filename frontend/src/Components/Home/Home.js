import './Home.css'


    export const Home = () => {



return (
    <div className="home">
      <header className="header-job">
        <nav className="nav-job">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/job">Jobs</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="container">
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="card-container-home">
            <div className="card">
              <p>Hi, I'm Muskan</p>
              <br />
              <h4>
                I am passionate about web development, music, reading,
                photography, and technology. I love to explore new technologies,
                create stunning websites and applications, and capture the beauty
                of the world through my lens. When I am not coding or designing,
                you can find me lost in a good book or listening to my favorite
                playlist. I believe in constantly learning and pushing my
                boundaries to grow both personally and professionally.
              </h4>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-text">&copy; Muskan 2022</div>
      </footer>
    </div>
  );
};