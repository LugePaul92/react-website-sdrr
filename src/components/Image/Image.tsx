import React from "react";
import styled from "styled-components";

interface ImageProps {
  alt?: string;
  src: string | HTMLImageElement | File;
  width?: string | number;
  height?: string | number;
  objectFit?: string;
  layout?: string;
  borderRadius?: string;
}

export const Image = ({
  alt,
  src,
  width,
  height,
  objectFit,
  borderRadius,
}: ImageProps) => {
  return (
    <ImageContainer
      alt={alt}
      src={src as string}
      width={width}
      height={height}
      objectFit={objectFit}
      borderRadius={borderRadius}
      loading="eager"
    />
  );
};

const ImageContainer = styled.img`
  object-fit: ${(props: ImageProps) =>
    props.objectFit ? props.objectFit : "cover"};
  width: ${(props: ImageProps) => (props.width ? props.width : "32px")};
  height: ${(props: ImageProps) => (props.height ? props.height : "32px")};
  border-radius: ${(props: ImageProps) =>
    props.borderRadius ? props.borderRadius : "0px"};
`;
