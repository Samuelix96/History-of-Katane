import React from 'react'
import { useGetPostsQuery } from '../../api/apiSlice';
import Article from '../article/Article';
const Main = () =>
{

  let reverse = false;

  const {
    data: posts,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetPostsQuery() || {};

  console.log(posts)

  return (
    <div>
      { isPostSuccess &&
        !isPostLoading &&
      posts && posts.post?.map((element) =>
        {
          reverse = !reverse;
          return (
            <Article
              img={ element.img }
              description={ element.description }
              reverse={ reverse }
            />
          )
        }) }
    </div>
  )
}

export default Main
