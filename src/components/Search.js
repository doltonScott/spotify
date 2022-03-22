import React from "react";
import "./styles/Search.css";

export default function search() {
  return (
    <div className="search_section_div">
      <div className="search_section_header_section">
        <div className="search_section_header_button_div">
          <button>
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="search_bar_header_div">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input
            className="search_input"
            type="text"
            name="search-term"
            placeholder="Artists, songs, or podcasts"
          ></input>
        </div>
        <div className="search_account_div">
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
      <div className="search_section_recent_searches_div">
        <div className="middle_section_daily_mix_div">
          <div className="daily_mix_div">
            <div className="search_header_div">
              <h1> Recent Searches </h1>
              <button> SEE ALL </button>
            </div>
          </div>
          <div className="search_mix_container">
            <div className="search_mix_cards">
              <span className="x_search_span">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <div className="search_mix_img_container">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
                <img
                  id="search_image_circle"
                  src="https://i.scdn.co/image/ab67616d00001e02a40ee6a0dd494f08a9dbe695"
                  alt="img"
                ></img>
              </div>
              <div className="artist_div">
                <h2> Young Scooter </h2>
                <h4> Artist </h4>
              </div>
            </div>
            <div className="search_mix_cards">
              <span className="x_search_span">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <div className="search_mix_img_container">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
                <img
                  src="https://i.scdn.co/image/ab67706f0000000372da819e1e97d6e78e767567"
                  alt="img"
                ></img>
              </div>
              <div className="artist_div">
                <h2> This Is Lil Uzi Vert </h2>
                <h4> By Spotfy </h4>
              </div>
            </div>
            <div className="search_mix_cards">
              <span className="x_search_span">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <div className="search_mix_img_container">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
                <img
                  id="search_image_circle"
                  src="https://i.scdn.co/image/ab6761610000e5ebba4309876dbc0ef3222c5512"
                  alt="img"
                ></img>
              </div>
              <div className="artist_div">
                <h2> Chris Brown </h2>
                <h4> Artist </h4>
              </div>
            </div>
            <div className="search_mix_cards">
              <span className="x_search_span">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <div className="search_mix_img_container">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
                <img
                  id="search_image_circle"
                  src="https://i.scdn.co/image/ab6761610000e5eb02eeb5305fa7bdd9ddca42fc"
                  alt="img"
                ></img>
              </div>
              <div className="artist_div">
                <h2> Miguel </h2>
                <h4> Artist </h4>
              </div>
            </div>
            <div className="search_mix_cards">
              <span className="x_search_span">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <div className="search_mix_img_container">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2735e9dff10c31ac14c6c6c920d"
                  alt="img"
                ></img>
              </div>
              <div className="artist_div">
                <h2> Sky Walker (feat. Trav... </h2>
                <div className="artist_button_div">
                  <button> E </button>
                  <h4> Miguel, Travis Scott </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search_genre_div">
        <div className="search_genre_header_div">
          <h1> Your Top Genres </h1>
        </div>
        <div className="genre_row">
          <div className="genre_box_container">
            <div className="genre_box" id="genre_box_1">
              <h1> Hip Hop </h1>
              <div className="genre_box_img_div">
                <img
                  src="https://musicpromotoday.com/wp-content/uploads/2020/04/feature-4.jpg"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="genre_box" id="genre_box_2">
              <h1> Country </h1>
              <div className="genre_box_img_div">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003f5b078962d37890234b76125"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="genre_box" id="genre_box_3">
              <h1>Pop</h1>
              <div className="genre_box_img_div">
                <img
                  src="https://i.scdn.co/image/ab67706f00000003c34c4416ee6a7f0f89e4047a"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="genre_box" id="genre_box_4">
              <h1> Dance / Electric </h1>
              <div className="genre_box_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="browse_all_container">
        <div className="browse_all_div">
          <div className="search_genre_header_div">
            <h1> Browse All </h1>
          </div>
          <div className="browse_cards_container">
            <div className="browse_all_cards" id="browse_1">
              <h2> Podcasts </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_2">
              <h2> Made For You </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_3">
              <h2> Charts </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_4">
              <h2> New Releases </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_5">
              <h2> Discover </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards">
              <h2> Discover </h2>
              <div className="browse_img_div" id="browse_6">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_7">
              <h2> Concerts </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_8">
              <h2> Country </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_9">
              <h2> Rock </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_10">
              <h2> EQUAL </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_11">
              <h2> Workout </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_12">
              <h2> Latin </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_13">
              <h2> Netflix </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_14">
              <h2> Mood </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_15">
              <h2> Sleep </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
            <div className="browse_all_cards" id="browse_16">
              <h2> Student </h2>
              <div className="browse_img_div">
                <img
                  src="https://lite-images-i.scdn.co/image/ab67706f00000002cca2df3adaf16428a2aba01d"
                  alt="hiphop"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
