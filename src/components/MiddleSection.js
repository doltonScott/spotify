import React from "react";
import "./styles/MiddleSection.css";

function MiddleSection() {
  return (
    <div className="middle_section_div">
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
      <div className="middle_section_recently_played_div">
        <div className="recently_played_div">
          <h1> Good Evening, username </h1>
        </div>
        <div className="recently_played_cards_container">
          <div className="recently_played_cards_div one">
            <img
              src="https://i1.sndcdn.com/artworks-4Lu85Xrs7UjJ4wVq-vuI2zg-t500x500.jpg"
              alt="logo"
            ></img>
            <h1> Liked Songs</h1>
            <span>
              <i class="fa fa-play" aria-hidden="true"></i>
            </span>
          </div>
          <div className="recently_played_cards_div two">
            <img
              src="https://i.pinimg.com/originals/51/7e/10/517e1033dfa174729eb3a3f0cd6eb5e3.png"
              alt="logo"
            ></img>
            <h1> Released Radar </h1>
            <span>
              <i class="fa fa-play" aria-hidden="true"></i>
            </span>
          </div>
          <div className="recently_played_cards_div three">
            <img
              src="https://i.scdn.co/image/ab67706f000000031416f67f937b9ee33b3753e2"
              alt="logo"
            ></img>
            <h1> Country Songs </h1>
            <span>
              <i class="fa fa-play" aria-hidden="true"></i>
            </span>
          </div>
          <div className="recently_played_cards_div four">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/ar0/4704b448e2f7e0f90590152d9c57fca7"
              alt="logo"
            ></img>
            <h1> Hip Hop </h1>
            <span>
              <i class="fa fa-play" aria-hidden="true"></i>
            </span>
          </div>
          <div className="recently_played_cards_div five">
            <img
              src="https://estaticos-cdn.elperiodico.com/clip/bc53a5ed-c190-475d-87af-fef7e35c2882_alta-libre-aspect-ratio_default_0.jpg"
              alt="logo"
            ></img>
            <h1> Podcasts </h1>
          </div>
          <div className="recently_played_cards_div six">
            <img
              src="https://i.pinimg.com/originals/d3/b1/25/d3b1252338c0461134e34aa7f902552e.jpg"
              alt="logo"
            ></img>
            <h1> Playlist </h1>
            <span>
              <i class="fa fa-play" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="middle_section_daily_mix_div">
        <div className="daily_mix_div">
          <div className="daily_mix_header_div">
            <h1> Made For Username </h1>
            <button> SEE ALL </button>
          </div>
        </div>
        <div className="daily_mix_container">
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <span>
                <i class="fa fa-play" aria-hidden="true"></i>
              </span>
              <img
                src="https://i.pinimg.com/736x/9a/41/98/9a4198abfd84448781ae162c4d8bd1a6.jpg"
                alt="img"
              ></img>
            </div>
            <h2> Daily Mix 1 </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <span>
                <i class="fa fa-play" aria-hidden="true"></i>
              </span>
              <img
                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd8b9980db67272cb4d2c3daf/2/en/large"
                alt="img"
              ></img>
            </div>
            <h2> Daily Mix 2 </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <span>
                <i class="fa fa-play" aria-hidden="true"></i>
              </span>
              <img
                src="https://i.pinimg.com/736x/39/eb/54/39eb546a73cd6e804c67d20b980d24cd.jpg"
                alt="img"
              ></img>
            </div>
            <h2> Daily Mix 3 </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <span>
                <i class="fa fa-play" aria-hidden="true"></i>
              </span>
              <img
                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb09bf4814c6585e1f69dfeef7/4/en/large"
                alt="img"
              ></img>
            </div>
            <h2> Daily Mix 4 </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <span>
                <i class="fa fa-play" aria-hidden="true"></i>
              </span>
              <img
                src="https://i.pinimg.com/236x/aa/04/35/aa0435f1137d5ab9af8c88079dbab9c6.jpg"
                alt="img"
              ></img>
            </div>
            <h2> Daily Mix 5 </h2>
            <h4> Artists </h4>
          </div>
        </div>
      </div>
      <div className="middle_section_daily_mix_div">
        <div className="daily_mix_div">
          <div className="daily_mix_header_div">
            <h1> Recently Played </h1>
            <button> SEE ALL </button>
          </div>
        </div>
        <div className="daily_mix_container">
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i1.sndcdn.com/artworks-4Lu85Xrs7UjJ4wVq-vuI2zg-t500x500.jpg"
                alt="img"
              ></img>
            </div>
            <h2> Liked Songs </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67706c0000bebbd87e1e2b80a0e8a0dd400a56"
                alt="img"
              ></img>
            </div>
            <h2> Hip Hop Essentials </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27362ef829e90ad647d3d3af0d9"
                alt="img"
              ></img>
            </div>
            <h2> Summer Country </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ=="
                alt="img"
              ></img>
            </div>
            <h2> Discover Weekly </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67706f000000038663be06e69f49628cf83a56"
                alt="img"
              ></img>
            </div>
            <h2> 2010s mix </h2>
            <h4> Artists </h4>
          </div>
        </div>
      </div>
      <div className="middle_section_daily_mix_div">
        <div className="daily_mix_div">
          <div className="daily_mix_header_div">
            <h1> Pop </h1>
            <button> SEE ALL </button>
          </div>
        </div>
        <div className="daily_mix_container">
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i1.sndcdn.com/artworks-4Lu85Xrs7UjJ4wVq-vuI2zg-t500x500.jpg"
                alt="img"
              ></img>
            </div>
            <h2> Liked Songs </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67706c0000bebbd87e1e2b80a0e8a0dd400a56"
                alt="img"
              ></img>
            </div>
            <h2> Hip Hop Essentials </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27362ef829e90ad647d3d3af0d9"
                alt="img"
              ></img>
            </div>
            <h2> Summer Country </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ=="
                alt="img"
              ></img>
            </div>
            <h2> Discover Weekly </h2>
            <h4> Artists </h4>
          </div>
          <div className="daily_mix_cards">
            <div className="daily_mix_img_container">
              <img
                src="https://i.scdn.co/image/ab67706f000000038663be06e69f49628cf83a56"
                alt="img"
              ></img>
            </div>
            <h2> 2010s mix </h2>
            <h4> Artists </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
