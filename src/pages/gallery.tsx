import React from "react";
import { graphql } from "gatsby";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import { H2, PageLayout, FullScreenImage } from "../components";
import styled from "styled-components";

const thingy = (): { cb: () => void; el: JSX.Element } => {
  return {
    cb: () => console.log("hello"),
    el: <h1> Hello</h1>,
  };
};

const GalleryDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Button = styled.button``;
export default ({ data }: { data: Data }) => {
  const bitsnbobs = thingy();
  const { ImageModal, openModal } = FullScreenImage();

  return (
    <PageLayout>
      <H2>Gallery</H2>
      <GalleryDisplay>
        {data.allFile.edges.map((file) => {
          const pathBits = file?.node?.absolutePath?.split("/") || [];
          return (
            <div key={file.node.absolutePath}>
              <p>{pathBits[pathBits.length - 2]}</p>
              {/* <p>{pathBits.join(" / ")}</p> */}
              <Button onClick={openModal}>
                <Img fluid={file.node.childImageSharp.fluid} />
              </Button>
              {/* <Img fixed={file.node.childImageSharp.fixed} /> */}
            </div>
          );
        })}
      </GalleryDisplay>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { ext: { in: [".png", ".jpg"] } }) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              aspectRatio
            }
            fixed(width: 200) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
              src
              srcSet
              width
              height
            }
          }
        }
      }
    }
  }
`;

type Data = {
  allFile: {
    edges: [
      {
        node: {
          absolutePath: string;
          childImageSharp: { fixed: FixedObject; fluid: FluidObject };
        };
      }
    ];
  };
};
