import React from "react";
import "./styles/LeftColumn.css";

function LeftColumn() {
  return (
    <div className="left_column_div">
      <div className="left_column_text_div">
        <div className="left_column_home_div">
          <i class="fa fa-home" aria-hidden="true"></i>
          <h3> Home </h3>
        </div>
        <div className="left_column_search_div">
          <i class="fa fa-search" aria-hidden="true"></i>
          <h3> Search </h3>
        </div>
        <div className="left_column_library_div">
          <i class="fa fa-bars" aria-hidden="true"></i>
          <h3> Your Library </h3>
        </div>
      </div>
      <div className="left_column_playlist_div">
        <div className="left_column_create_playlist_div">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvn4LnweiJTrZij9WR8QGYHrwaNRzrV0XtgvLTwdH4NfXutfWI5TXHbXdaWyGgukUYV4&usqp=CAU"
            alt="logo"
          ></img>
          <h3> Create Playlist </h3>
        </div>
        <div className="left_column_liked_songs_div">
          <img
            src="https://i1.sndcdn.com/artworks-4Lu85Xrs7UjJ4wVq-vuI2zg-t500x500.jpg"
            alt="logo"
          ></img>
          <h3> Liked Songs </h3>
        </div>
      </div>
      <div className="left_column_land_div">
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2017/12/palm-tree-silhouette-vol-2-8-712x1024.png"
          alt="tree"
        ></img>
      </div>
    </div>
  );
}

export default LeftColumn;
