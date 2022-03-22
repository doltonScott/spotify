import React from "react";
import "./styles/Settings.css";

export default function Settings() {
  return (
    <div className="settings_container">
      <div className="middle_section_header_section">
        <div className="middle_section_header_button_div">
          <button>
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="header_account_div">
          <img
            src="http://www.kingsvilletwp.org/wp-content/uploads/2017/06/cropped-person-icon-8-1.png"
            alt="acct"
          ></img>
          <h2> Username </h2>
          <button>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="settings_text_container">
        <h1> Settings </h1>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Language </h2>
          </div>
          <div className="settings_selection_div">
            <p>
              Choose language - Changes will be applied after restarting the app
            </p>
            <button>
              <h3>English (English)</h3>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Explicit Content </h2>
          </div>
          <div className="settings_selection_div">
            <p>Allow playback of explicit rated content</p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Autoplay </h2>
          </div>
          <div className="settings_selection_div">
            <p>Autoplay similar songs when your music ends in this app</p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings_selection_div">
            <p>Autoplay similar songs when your music ends in other devices </p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Audio quality </h2>
          </div>
          <div className="settings_selection_div">
            <p>Streaming quality</p>
            <button id="medium_length_button">
              <h3>Automatic</h3>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="settings_selection_div">
          <p>Download Higher quality uses more storage.</p>
          <button id="medium_length_button">
            <h3>High</h3>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
        </div>
        <div className="settings_selection_div">
          <p>
            Auto adjust quality - Recommended settings: On <br /> We adjust your
            audio quality when your internet bandwidth is slow. Turning this off
            may cause interruptions to your listening.
          </p>
          <label className="switch">
            <input className="onSwitch" type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="settings_selection_div">
          <p>
            Normalize volume - Set the same volume level for all songs and
            podcasts
          </p>

          <label className="switch">
            <input className="onSwitch" type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="settings_selection_div">
          <p>
            Volume level - Adjust the volume for your environment. Loud may
            diminish audio quality. No effect on audio quality in Normal or
            Quiet.
          </p>
          <button id="short_length_button">
            <h3>Normal</h3>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Local Files </h2>
          </div>
          <div className="settings_selection_div">
            <p>Show Local Files</p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Display </h2>
          </div>
          <div className="settings_selection_div">
            <p>Show announcements about new releases </p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings_selection_div">
            <p>See what your friends are playing </p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="settings_language_div">
          <div className="settings_header_div">
            <h2> Social </h2>
          </div>
          <div className="settings_selection_div">
            <p>Connect to facebook to see what your friends are playing</p>
            <button id="settings_facebook_btn">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <h3 id="facebook_h3">Connect with facebook</h3>
            </button>
          </div>
          <div className="settings_selection_div">
            <p>Male my new playlists public</p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings_selection_div">
            <p>Start a private session to listen anonymously</p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings_selection_div">
            <p>Share my listening activity on Spotify </p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings_selection_div">
            <p>Show my recently played artists on my public profile </p>

            <label className="switch">
              <input className="onSwitch" type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
