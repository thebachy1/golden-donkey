import React, { useEffect, useState } from "react";
import WorksGallery from "./WorksGallery";
import ProjectsNav from "./ProjectsNav";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled } from "@mui/material";
import "./Works.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 10, min: 10 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "50px",
});

const ImageBox = styled(Box)({
  backgroundColor: "#e0e0e0", // Placeholder for image background
  marginBottom: "10px",
});

const Divider = styled(Box)({
  width: "300px",
  height: "2px",
  backgroundColor: "#000", // Black color for the line
  marginTop: "8px", // Space between image and line
  marginBottom: "8px", // Space between line and caption
});

const sliderImages = [
  "https://placehold.co/600x800",
  "https://placehold.co/600x800",
  "https://placehold.co/600x800",
  "https://placehold.co/600x800",
  "https://placehold.co/600x800",
];

const images = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

function Works() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const transitionDuration = 5000; // 5 seconds

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    // Start the progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, transitionDuration / 100);

    // When progress reaches 100%, move to the next image
    if (progress === 100) {
      setProgress(0);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="works-container">
      <div className="slider-container">
        <img
          src={sliderImages[currentImageIndex]}
          alt="slider"
          className="slider-image"
        />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div>
        <div className="works-title">
          <h1>BITE BACK</h1>
          <h2>A BATTLE AGAINST</h2>
          <h2>A BROKEN FOOD SYSTEM.</h2>
        </div>
        <div className="works-info">
          <div className="works-stats">
            <div className="works-stats-item">
              <h3>14,000</h3>
              <p>Youth activists engaged since rebrand</p>
              <p className="works-stats-item-link">Engagement</p>
            </div>
            <div className="works-stats-item">
              <h3>250%</h3>
              <p>Social engagements increase</p>
              <p className="works-stats-item-link">Engagement</p>
            </div>
            <div className="works-stats-item">
              <h3>254%</h3>
              <p>Uplit in net audience growth</p>
              <p className="works-stats-item-link">Audience Growth</p>
            </div>
          </div>

          <div className="text-container">
            <h3>A battle against a broken food system</h3>
            <p className={`text-content ${showMore ? "expanded" : ""}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
              cvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
              amet, cvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
              amet, cvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            {!showMore && (
              <div className="fade-out"></div> // The fading effect
            )}
            <button className="show-more-btn" onClick={handleShowMore}>
              {showMore ? "READ LESS" : "READ MORE"}
            </button>
          </div>
        </div>
        <div className="works-footer">
          <div className="works-footer-divider"></div>
          <div>
            <button className="works-footer-btn">Awwards</button>
            <button className="works-footer-btn">Awwards</button>
            <button className="works-footer-btn">Awwards</button>
          </div>
        </div>
      </div>
      <WorksGallery images={images} />
      <ProjectsNav />
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={0}
          customTransition="transform 10000ms linear"
          transitionDuration={100000}
        >
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
            <div></div>
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
          <ContentBox>
            <ImageBox width="350px" height="600px" />
            <Divider />
          </ContentBox>
        </Carousel>
      </div>
    </div>
  );
}

export default Works;
