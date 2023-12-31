import React from "react";
import "./supervisor.scss";
import Facebook from "../../assets/social/fb.png";
import LinkedIn from "../../assets/social/linkedin.png";
import Twitter from "../../assets/social/twitter.png";
import Youtube from "../../assets/social/youtube.png";
import Instagram from "../../assets/social/instagram.png";
import mm5 from "../../assets/img/team/mm5.jpg";
import Member2 from "../../assets/img/team/member2.jpg";
import Member3 from "../../assets/img/team/member3.jpg";
import Member4 from "../../assets/img/team/member4.jpg";
import Panel from "../Panel/Panel";

const supervisor = () => {
  return (
    <>
      <div className="title" style={{ color: "#1e3050" }}>
        Supervisors
      </div>
      <div className="panel">
        <Panel />
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
                <img src={mm5} />
              </a>

              <h1>Janinda Kirindigoda</h1>
            </header>

            <div class="profile-bio">
              {/* <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p> */}
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
              <a href="#">
                <img src={Member2} />
              </a>

              <h1>Kavindu Rathnayake</h1>
            </header>

            <div class="profile-bio">
              {/* <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p> */}
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="#">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={Twitter} />
                </a>
              </li>
            </ul>
          </aside>

          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="#">
                <img src={Member3} />
              </a>

              <h1>Shenita Alexander</h1>
            </header>

            <div class="profile-bio">
              {/* <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p> */}
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="#">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={Instagram} />
                </a>
              </li>
            </ul>
          </aside>

          <aside class="profile-card">
            <div class="mask-shadow"></div>
            <header>
              <a href="#">
                <img src={Member4} />
              </a>

              <h1>Ravindu  Dolawatta</h1>
            </header>

            <div class="profile-bio">
              {/* <p>
                "Terence is an avid reader of science fiction, especially
                anything to do with aliens and tweed jackets. Most weekends, he
                can be found cataloguing his collection of rodent skeletons."
              </p> */}
            </div>

            <ul class="profile-social-links">
              <li>
                <a href="#">
                  <img src={Facebook} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={LinkedIn} />
                </a>
              </li>

              <li>
                <a href="#">
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
