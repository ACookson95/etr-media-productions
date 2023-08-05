import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import VideoGrid from "../components/VideoGrid";
import YoutubeVideo from "../components/YoutubeVideo";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Portfolio = () => {
  const [active, setActive] = React.useState(0);
  const videos = [
    {
      id: "koA0U11i354",
      thumbnailNum: "0",
      title: "The Forge",
      description: "",
    },
    {
      id: "PSnP_MqTx8c",
      thumbnailNum: "0",
      title: "Real Estate",
      description: "",
    },
    {
      id: "vHNas6udfzk",
      thumbnailNum: "0",
      title: "4 Principles that Drive Us",
      description: "",
    },
    {
      id: "X1bdJdo5odo",
      thumbnailNum: "0",
      title: "Wangen Pump",
      description: "",
    },
    {
      id: "C1Y71QzN8Z0",
      thumbnailNum: "0",
      title: "Berserker",
      description: "",
    },
    {
      id: "QS_juJ4g5ZU",
      thumbnailNum: "0",
      title: "Chhlat Health",
      description: "",
    },
    {
      id: "M2nYmpQ-FfU",
      thumbnailNum: "0",
      title: "Fall Colors",
      description: "",
    },
    {
      id: "zLosZHWnyoE",
      thumbnailNum: "0",
      title: "A Day in the Life of a Skateboarder",
      description: "",
    },
    {
      id: "rOHlsOLVK0c",
      thumbnailNum: "0",
      title: "Custom Guitar Maker",
      description: "",
    },
  ];

  return (
    <>
      <Layout>
        <Wrapper>
          <div>
            <div>
              <div></div>
              <div>
                <YoutubeVideo
                  id={videos[active].id}
                  title={videos[active].title}
                />
              </div>
            </div>
            <VideoGrid videos={videos} current={active} setActive={setActive} />
          </div>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Portfolio;

export const Head = () => <SEO />;
