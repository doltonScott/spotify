import React from "react";
import "./styles/RightColumn.css";

export default function RightColumn() {
  return (
    <div className="right_column_container">
      <div className="right_column_header_div">
        <h1> Friend Activity </h1>
        <img
          src="https://i7.uihere.com/icons/1/741/194/friend-add-35f18ccf4a594a149df542ff46cea9f3.png"
          alt="user"
        ></img>
      </div>
      <div className="right_column_friends_text_div">
        <p>
          Let friends and followers on Spotify see what you're listening to.
        </p>
      </div>
      <div className="right_user_icons_div">
        <div className="individual_icons_div">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <div className="blank_div_container">
            <div className="blank_div" id="long_blank_div"></div>
            <div className="blank_div"></div>
            <div className="blank_div"></div>
          </div>
        </div>
        <div className="individual_icons_div">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <div className="blank_div_container">
            <div className="blank_div" id="long_blank_div"></div>
            <div className="blank_div"></div>
            <div className="blank_div"></div>
          </div>
        </div>
        <div className="individual_icons_div">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <div className="blank_div_container">
            <div className="blank_div" id="long_blank_div"></div>
            <div className="blank_div"></div>
            <div className="blank_div"></div>
          </div>
        </div>
      </div>
      <div className="right_column_friends_text_div">
        <p>
          Go to Settings <span>&#62;</span> Social and enable 'Share my
          listening activity on Spotify.' You can turn this off at any time.
        </p>
      </div>
      <div className="right_settings_button">
        <button> SETTINGS </button>
      </div>
      <div className="right_column_animations_container">
        <div className="animations_land_div">
          <img
            src="https://www.onlygfx.com/wp-content/uploads/2017/12/palm-tree-silhouette-vol-2-8-712x1024.png"
            alt="tree"
          ></img>
        </div>
      </div>
    </div>
  );
}
