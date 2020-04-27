import React from "react";

const About = () => {
  return (
    <div className="px-2">
      {/* Title */}
      <div className=" pl-2 mb-3 pt-4">
        <h3 className="border border-muted rounded p-1">About NATURE</h3>
      </div>
      {/* Description */}
      <p style={{ textAlign: "justify" }} className="px-2">
        This site was designed and developed by Shailesh Khanal, just for
        practice purpose while learning React JS. The pictures used in this
        website is NOT owned by Shailesh. Those pictures are used for
        educational purose and to reflect the love towards the nature. If you
        are interested to connect with Shailesh, you can check his social media
        profiles, music proiles and various blogs:
        <br />
        <ul
          style={{ listStyleType: "none", display: "table" }}
          className="mt-3"
        >
          <li>
            <i className="fa fa-instagram fa-2x"></i>
            <a href="https://www.instagram.com/transforming_into_light/">
              <h6 style={{ display: "inline", marginLeft: "20px" }}>
                Instagram
              </h6>
            </a>
          </li>
          <li>
            <i className="fa fa-youtube fa-2x mt-2"></i>
            <a href="https://www.youtube.com/user/shylaysh">
              <h6 style={{ display: "inline", marginLeft: "20px" }}>Youtube</h6>
            </a>
          </li>

          <li>
            <i className="fa fa-facebook fa-2x mt-2"></i>
            <a href="https://www.facebook.com/shylaysh">
              <h6 style={{ display: "inline", marginLeft: "30px" }}>
                Facebook
              </h6>
            </a>
          </li>
          <li>
            <i className="fa fa-twitter fa-2x mt-2"></i>
            <a href="https://twitter.com/shylaysh">
              <h6 style={{ display: "inline", marginLeft: "18px" }}>Twitter</h6>
            </a>
          </li>
          <li>
            <i className="fa fa-spotify fa-2x mt-2"></i>
            <a
              href="https://open.spotify.com/artist/3lIOfkj5FaFV0C3w0nCyEQ?si=U821_NUpTLGI334kPphf7g
"
            >
              <h6 style={{ display: "inline", marginLeft: "20px" }}>Spotify</h6>
            </a>
          </li>
          <li>
            <i className="fa fa-soundcloud fa-2x mt-2"></i>
            <a href="https://soundcloud.com/shailesh-khanal/tracks">
              <h6 style={{ display: "inline", marginLeft: "7px" }}>
                Soundcloud
              </h6>
            </a>
          </li>
        </ul>
        <h6 style={{ fontFamily: "Cambria", fontWeight: "bold" }}>
          Other Various Blogs:
        </h6>
        <ul
          style={{ listStyleType: "square", paddingLeft: 30, color: "silver" }}
        >
          <li>
            <a href="http://screamingfrustratedsoul.blogspot.com/">
              Frustrated Soul
            </a>{" "}
          </li>
          <li>
            <a href="http://shylayshlyrics.blogspot.com/"> God's Robot</a>{" "}
          </li>
          <li>
            <a href="http://shylayshacceptshisfate.blogspot.com/">
              I'll transform someday
            </a>{" "}
          </li>
          <li>
            <a href="http://shylayshthanksgod.blogspot.com/">
              Thanks for everything
            </a>{" "}
          </li>
          <li>
            <a href="http://shylaysh.blogspot.com/">तिमी म भएर हेर</a>{" "}
          </li>
        </ul>
      </p>
      {/* Price */}
    </div>
  );
};

export default About;
