import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation AddUser(
      $username: String!,
      $password: String!,
      $firstname: String!,
      $lastname: String,
      $email: String!,
    ){
    addUser(
      input: {
        username: $username
        password: $password
        firstname: $firstname
        lastname: $lastname
        email: $email
      }
    ){
      username
      password
      firstname
      email
    }
  }
`;

export const ADD_LOCATION_BLOG = gql`
  mutation AddLocationBlog(
      $info: String!,
      $author: ObjectID!,
      $longitude: Int!,
      $latitude: Int!
    ){
    addLocationBlog(
      input: {
        info: $info
        author: $author
        pos: {
          longitude: $longitude
          latitude: $latitude
        }
      }
    ){
      info
      author
    }
  }
`;

export const LIKE_LOCATION_BLOG = gql`
  mutation LikeLocationBlog(
      $username: String!,
      $blogID: ObjectID!,
    ){
    likeLocationBlog(
        username: $username
        blogID: $blogID
    ){
      info
      likedBy
    }
  }
`;