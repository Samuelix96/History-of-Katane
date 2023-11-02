import React from 'react'
import { useGetPostsQuery } from '../../api/apiSlice';
import Article from '../article/Article';
import { nanoid } from 'nanoid';




const Main = () =>
{
  let reverse = false;

  const {
    data: posts,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetPostsQuery();

  
  
  return (
    <div>
      { isPostSuccess && !isPostLoading ? (
        posts ? (
          posts.post?.map((element) =>
          {
            reverse = !reverse;
            return (
              <Article
              key= { element._id}
                title= {element.title}
                subtitle = {element.subtitle}
                img={ element.img }
                description={ element.description }
                reverse={ reverse }
                source= {element.source}
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
