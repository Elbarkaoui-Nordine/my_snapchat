import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const App = props => {
  const [picture, setPicture] = useState([]);

  const onDrop = image => {
    if ( image.length !== 0) {
        setPicture(picture[picture.length])
        console.log(picture);
    }
  };
  return (
    <ImageUploader
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
  );
};

export default App;