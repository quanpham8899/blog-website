import styles from './NavBar.module.css';
import bodyStyles from './Body.module.css'
import { Post } from "./Post";



export const Separator = ({width, height, color}) => {
  
  const sepStyle = {
    width: width,
    height: height,
    backgroundColor: color,
  }

  return (
    <dir className={styles['separator-line']} style={sepStyle}></dir>
  );
}

export function PostContainer({FeaturePosts, PostTitle, AltPost, id}) {

  console.log(FeaturePosts);
  console.log(typeof FeaturePosts === undefined);

  return (
    <div className={bodyStyles["body-container"]}>
      <h3 id={id} className={bodyStyles["post-header"]}>{PostTitle}</h3>
      <Separator width={'10%'} height={'1px'} color={'rgba(0, 0, 0, .125)'}/>
      <div className={bodyStyles['post-container']}>
        {
          FeaturePosts !== undefined && (
            FeaturePosts.map((post, index) => (
              <Post 
                key = { index } 
                AltPost = { AltPost }
                category = { post.category } 
                title = { post.title }
                background = { post.background }
                descriptions = { post.descriptions }
                author = { post.author }
                releaseDate = { post.releaseDate }
              />
            ))
          )
        }
      </div>
    </div>
  );
}
