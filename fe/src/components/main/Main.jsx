import React, { useEffect} from 'react'
import { useGetPostsQuery } from '../../api/apiSlice';
import Article from '../article/Article';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Main = () =>
{
  let reverse = false;

  const {
    data: posts,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetPostsQuery();

  console.log(posts);
  
  return (
    <div>
      { isPostSuccess && !isPostLoading ? (
        posts ? (
          posts.post?.map((element) =>
          {
            reverse = !reverse;
            return (
              <Article
                img={ element.img }
                description={ element.description }
                reverse={ reverse }
              />
            );
          })
        ) : (
          <p>...Loading</p>
        )
      ) : IsPostError ? (
        <p>Errore nella chiamata dei post</p>
      ) : null }
    </div>
  );

}


export default Main
