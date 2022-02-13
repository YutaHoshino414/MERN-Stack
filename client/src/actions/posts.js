import * as api from '../api';

//Action Creators
export const getPosts = ()=> async(dispath) =>{
    try {
        const { data } = await api.fetchPosts();
        dispath({ type:'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispath) => {
  try {
      const { data } = await api.createPost(post);
      dispath({ type:'CREATE', payload: data})
  } catch(error) {
      console.log(error);
  }
}