
import './App.css';

function App() {

  return (
   
    <div className="container">
      <div className="intro">
          <h1>
              Learn to code by
            <br
            />
              watching others
          </h1>
          <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how 
              developers think is invaluable.
          </p>
      </div>

      <div className="right-side">
          <div className="fee">
              <h2>
                <strong>Try it for free for 7 days</strong> then $20/mo. thereafter
              </h2>
          </div>
          <div className="window">
              <form id="sign-up">
                  <div className="form-field">
                      <label for="first-name" id="first-name-label">
                          <input type="text"
                              name="first-name"
                              id="first-name"
                              class="data"
                              placeholder="First Name"
                              required
                          />
                      </label>
                  </div>

                  <div className="form-field">
                      <label for="last-name" id="last-name-label">
                          <input type="text"
                              name="last-name"
                              id="last-name"
                              class="data"
                              placeholder="Last Name"
                              required
                          />
                      </label>
                  </div>

                  <div className="form-field">
                      <label for="email" id="email-label">
                          <input type="email"
                              name="email"
                              id="email"
                              class="data"
                              placeholder="Email Address"
                              required
                          />
                      </label>
                  </div>

                  <div className="form-field">
                      <label for="pwd" id="pwd-label">
                          <input type="password"
                              name="pwd"
                              id="pwd"
                              class="data"
                              placeholder="Password"
                              required
                          />
                      </label>
                  </div>

                  <div className="form-field">
                      <button type="submit" id="submit" class="submit-button">
                          CLAIM YOUR FREE TRIAL 
                      </button>
                  </div>
                  <div className="note">
                      <span>
                          By clicking this button, you are agreeing to our <strong>Terms and Services</strong>
                      </span>
                  </div>
              </form>
          </div>
      </div>
    

      <footer>
          <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/Pia007" target="_blank" rel="noreferrer">Pia Torain</a>, a <a href="https://www.reskillamericans.org" target="_blank" rel="noreferrer">Reskill Americans</a> participant. 
          </p>
      </footer>
    
    </div> 
   
  );
}

export default App;
