import { useEffect, useRef, useState } from 'react';
import styles from './Post.module.css'

export const Post = (props) => {

  const [hovered, setHovered] = useState(false);

  const backgroundImage = useRef(null);
  const postContainer = useRef(null);
  const postInfo = useRef(null);
  
  const useAlt = props.AltPost;
  const postCategory = props === undefined || props.category === undefined ? "No Category" : props.category;
  const postTitle = props === undefined || props.title === undefined ? "No Title" : props.title;
  const postSummary = props === undefined || props.descriptions === undefined ? "Author hasn't post any yet!" : props.descriptions;
  const postAuthor = props === undefined || props.author === undefined  ? "Anonymous" : props.author;
  const postReleaseDate = props === undefined || props.releaseDate === undefined ? "--/--/20--" : props.releaseDate;

  const onPostHoverEffect = (isHover) => {
    if (backgroundImage !== null) {
      backgroundImage.current.style.transform = isHover ? "scale3d(1.15, 1.15, 1)" : "scale3d(1, 1, 1)";
    }

    if (postContainer !== null) {
      postContainer.current.style.transform = isHover ? "translateY(-5px)" : "";
      postContainer.current.style.boxShadow = isHover ? "3px 3px 10px rgba(0, 0, 0, .23)" : "";
    }
  }

  useEffect(() => {
    if (backgroundImage !== null) {
      if (props.background.toString() !== "") {
        backgroundImage.current.style.background = `url("${props.background.toString()}")`;
        backgroundImage.current.style.backgroundPosition = "center";
        backgroundImage.current.style.backgroundSize = "cover";
        backgroundImage.current.style.backgroundRepeat = "no-repeat";
      }
    }

    if (postContainer !== undefined) {
      postContainer.current.style.minHeight = "320px";
    }

  }, []);

  useEffect (() => {
    onPostHoverEffect(hovered);
  }, [hovered]);

  // Test Avatar icon
  const imgSrc = "https://play-lh.googleusercontent.com/L6qehUCLcgG7W3cH1aBel04XKSp5GA9oX3NrUWgwaIwkiYWnhF-xJftIQz5m5Uy-0K67";
  
  //#region Style when set Alternative

  const backgroundSource = "";
  const defaultStyles = { }
  const altStyles = {
    color: 'black',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: '0 0 5px 5px',
    paddingTop: "10px"
  }
  const altHeight = {
    height: "330px"
  }
  const altBackground = {
    height: '60%'
  }

  //#endregion

  return (
    <a
      ref = { postContainer }
      style = { useAlt ? altHeight : defaultStyles }
      href="#"
      onMouseOver = { () => setHovered(true) }
      onMouseLeave = { () => setHovered(false) }
      className = { styles["post"] }
    >
      <div
        style = { useAlt ? altBackground : defaultStyles }
        ref = { backgroundImage }
        className = { styles["post-background"] }
      ></div>
      <div className = { styles["post-background-border"] }></div>
      <div className = { styles["post-title"] }>
        <span>{ postCategory }</span>
      </div>
      <div
        style = { useAlt ? altStyles : defaultStyles }
        className = { styles["post-information"] }
      >
        <div className = { styles["post-information-title"] }>{ postTitle }</div>
        <div className = { styles["post-information-summary"] }>{ postSummary }</div>
        <div className = { styles["post-information-author"] }>
          <div className={ styles["author-avatar"] }>
            <img src={imgSrc} alt="" />
          </div>
          <div className={ styles["author-name"] }>{ postAuthor }</div>
          <div className={ styles["author-date"] }>{ postReleaseDate }</div>
          {/* <div className = { styles["post-author"] }>
            <img src = { imgSrc} alt="" />
            <span>{ postAuthor }</span>
          </div>
          <div className = { styles["post-author-date"] }>{ postReleaseDate }</div> */}
        </div>
      </div>
    </a>
  );
}

