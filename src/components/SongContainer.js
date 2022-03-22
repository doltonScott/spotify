import React from "react";
import "./styles/SongContainer.css";
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Quicksand"
/>;

export default function SongContainer() {
  return (
    <div className="song_section_div">
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
      <div className="song_top_section">
        <img
          src="https://i1.sndcdn.com/artworks-4Lu85Xrs7UjJ4wVq-vuI2zg-t500x500.jpg"
          alt="logo"
        ></img>
        <div className="song_top_section_text">
          <h3> Playlist </h3>
          <h1> Liked Songs </h1>
          <div className="song_count_top_section">
            <h4>Dolton Scott</h4>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <p> 1,071 songs</p>
          </div>
        </div>
        <div className="sand_text_div"></div>
      </div>
      <div className="song_container_middle_section">
        <div className="song_container_middle_section_left_div">
          <span>
            <i class="fa fa-play" aria-hidden="true"></i>
          </span>
          <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
        </div>
        <div className="song_container_middle_section_right_div">
          <i class="fa fa-search" aria-hidden="true"></i>
          <h4> Custom order </h4>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="song_selection_header">
        <div className="song_title_div">
          <p> # </p>
          <h3> Title </h3>
        </div>
        <div className="song_album_div">
          <h3> Album </h3>
        </div>
        <div className="song_date_div">
          <h3> Date Added </h3>
        </div>
        <div className="song_time_div">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
        </div>
      </div>
      <div className="song_selection_container">
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 1 </p>
              <img
                src="https://i.scdn.co/image/ab67616d00001e02a40ee6a0dd494f08a9dbe695"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Cook Up </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Young Scooter, Young Thug </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Jugg King </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 8 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 3:40 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 2 </p>
              <img
                src="https://i.scdn.co/image/ab67616d0000b27349834c802954981644d228d4"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Carefree </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Kyle </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Carefree</h3>
          </div>
          <div className="song_section_date_div">
            <h3> 9 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 2:59 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 3 </p>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273210f34f92d359aa0e1098e24"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Richard Millie Plain </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Gunna </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Drip or Drown 2 </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 12 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 3:20 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 4 </p>
              <img
                src="https://i.scdn.co/image/ab67616d00001e028ed0d66bd4f617ea8bcaba3d"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Tiffany Nikes </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Wale </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Folarin ll </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 21 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 2:12 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 5 </p>
              <img
                src="https://i.scdn.co/image/ab67616d0000b2735e9dff10c31ac14c6c6c920d"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Sky Walker </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Miguel, Travis Scott </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> War & Leisure </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 21 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 4:19 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 6 </p>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273b0ab0cedbd0a743d339249b4"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Hide Away </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Daya </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Sit Still, Look Pretty </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 22 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 3:12 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 7 </p>
              <img
                src="https://i.scdn.co/image/ab67616d00001e02a40ee6a0dd494f08a9dbe695"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Cook Up </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Young Scooter, Young Thug </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Jugg King </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 8 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 3:40 </h3>
          </div>
        </div>
        <div className="song_container_div">
          <div className="song_section_title_img_container">
            <div className="song_section_img_div">
              <p> 8 </p>
              <img
                src="https://i.scdn.co/image/ab67616d00001e02a40ee6a0dd494f08a9dbe695"
                alt="none"
              ></img>
            </div>
            <div className="song_section_title_div">
              <h3> Cook Up </h3>
              <div className="song_section_button_div">
                <button> E </button>
                <h4> Young Scooter, Young Thug </h4>
              </div>
            </div>
          </div>
          <div className="song_section_album_div">
            <h3> Jugg King </h3>
          </div>
          <div className="song_section_date_div">
            <h3> 8 days ago </h3>
          </div>
          <div className="song_section_time_div">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <h3> 3:40 </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
