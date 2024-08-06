// NATIVE
import React from "react";
// LIBRARIES
import { useDropzone } from "react-dropzone";
// COMPONENTS
// STYLES
import * as S from "./styles";

// UTILS
import { UploadPortfolioPhotoData } from "../../assets/@types/global";

type Props = {
  uploadPhoto: (params: UploadPortfolioPhotoData) => void;
  portfolioItemId: number;
};

const PhotoDropzone: React.FC<Props> = ({ uploadPhoto, portfolioItemId }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      uploadPhoto({ photo: file, portfolioItemId});
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  return (
    <S.DropzoneButton {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <label htmlFor="photoInput">Upload Image</label>
    </S.DropzoneButton>
  );
};

export default PhotoDropzone;
