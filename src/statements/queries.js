import gql from "graphql-tag";

export const GET_USERS = gql`
   {
    getUsers {
      username
    }
  }
`;

export const GET_POSITIONS = gql`
   {
    getPositions {
      user
      created
      loc {
        coordinates
      }
    }
  }
`;

export const GET_LOCATIONBLOGS = gql`
   {
    getLocationBlogs {
      info
      likedBy
    }
  }
`;

export const FIND_USER_BY_USERNAME = gql`
query FindUserByUsername($username: String!) {
  findUserByUsername(username: $username) {
    username
    firstname
    lastname
  }
}
`