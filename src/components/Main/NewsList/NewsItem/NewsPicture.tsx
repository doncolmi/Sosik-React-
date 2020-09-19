import React, { FC } from "react";
import "../NewsItem.css";

import { load } from "cheerio";
import { Properties } from "csstype";

interface Props {
  contents: string;
}

const NewsPicture: FC<Props> = ({ contents }: Props) => {
  function setImage(contents: string): Properties {
    const $ = load(contents);
    const img: string = $("img").attr("src") || "/noImg.png";
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
    };
  }

  return <div className="NewsPicture" style={setImage(contents)}></div>;
};

export default NewsPicture;
