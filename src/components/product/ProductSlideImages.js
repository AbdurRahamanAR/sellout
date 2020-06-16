import React, { useState } from "react";
import { GlassMagnifier } from "react-image-magnifiers";

const imgPreview = {
  width: 94,
  height: 94,
  border: "2 solid #ef8216",
  overflow: "hidden",
  cursor: "pointer",
};

const selectImg =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80";

export default ({ style }) => {
  const [switchSides, setSwitchSides] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        ...style,
      }}
    >
      <ul
        style={{
          height: "100%",
          width: 110,
          paddingRight: 16,
          paddingLeft: 0,
          marginTop: 0,
          listStyle: "none",
        }}
      >
        <li style={imgPreview}>
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" />
        </li>
        <li style={{ ...imgPreview, marginTop: 15 }}>
          <img src="https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1016&q=80" />
        </li>
      </ul>
      <div
        style={{
          height: "100%",
          width: "calc(100% - 140px)",
        }}
      >
        <GlassMagnifier
          className="input-position"
          imageSrc={selectImg}
          largeImageSrc={selectImg}
          allowOverflow={true}
          magnifierSize="50%"
          magnifierBorderSize={5}
          magnifierBorderColor="rgba(255, 255, 255, .5)"
          square
        />
      </div>
    </div>
  );
};
