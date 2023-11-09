import React from "react";
import "./supervisor.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFileLines } from "@fortawesome/free-brands-svg-icons";
import Facebook from "../../assets/social/fb.png";
import LinkedIn from "../../assets/social/linkedin.png";
import Twitter from "../../assets/social/twitter.png";
import Youtube from "../../assets/social/youtube.png";
import Instagram from "../../assets/social/instagram.png";
import Janinda from "../../assets/img/team/janinda.jpg";

const supervisor = () => {
  return (
    <>
      <div className="supervisor-body">
        <div className="title">Supervisor</div>
      </div>
      <div className="team-members">
        <div className="title" style={{ color: "#1e3050" }}>
          Team Members
        </div>
        <div className="team-wrapper">
          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="#">
                <img src={Janinda} />
              </a>

              <h1>Janinda Induwara</h1>

              <h2>WEB Developer</h2>
            </header>

            <div class="profile-bio">
              <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p>
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="https://twitter.com/tutsplus">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="https://envato.com">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="https://codepen.io/tutsplus">
                  <img src={Twitter} />
                </a>
              </li>
            </ul>
          </aside>

          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="https://tutsplus.com">
                <img src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200" />
              </a>

              <h1>ALENA STUDIO</h1>

              <h2>WEB DESIGNER</h2>
            </header>

            <div class="profile-bio">
              <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p>
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="https://twitter.com/tutsplus">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="https://envato.com">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="https://codepen.io/tutsplus">
                  <img src={Twitter} />
                </a>
              </li>
            </ul>
          </aside>

          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="https://tutsplus.com">
                <img src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200" />
              </a>

              <h1>ALENA STUDIO</h1>

              <h2>WEB DESIGNER</h2>
            </header>

            <div class="profile-bio">
              <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p>
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="https://twitter.com/tutsplus">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="https://envato.com">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="https://codepen.io/tutsplus">
                  <img src={Instagram} />
                </a>
              </li>
            </ul>
          </aside>

          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="https://tutsplus.com">
                <img src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200" />
              </a>

              <h1>ALENA STUDIO</h1>

              <h2>WEB DESIGNER</h2>
            </header>

            <div class="profile-bio">
              <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p>
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="https://twitter.com/tutsplus">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="https://envato.com">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="https://codepen.io/tutsplus">
                  <img src={Youtube} />
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};
export default supervisor;
