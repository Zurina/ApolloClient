import React from 'react';
import { Mutation } from "react-apollo";
import { ADD_USER, ADD_LOCATION_BLOG, LIKE_LOCATION_BLOG } from '../statements/mutations'

export const AddUser = () => {
  let username;
  let password;
  let firstname;
  let lastname;
  let email;

  return (
    <Mutation mutation={ADD_USER}>
      {(addUser, { data }) => (
        <div>
          ADD USER
          <form
            onSubmit={e => {
              e.preventDefault();
              addUser({ variables: {
                    username: username.value,
                    password: password.value, 
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value 
                }});
              username.value = "";
              password.value = "";
              firstname.value = "";
              lastname.value = "";
              email.value = "";
            }}
          >
            username
            <input ref={node => { username = node }} />
            password
            <input ref={node => { password = node }} />
            firstname
            <input ref={node => { firstname = node }} />
            lastname
            <input ref={node => { lastname = node }} />
            email
            <input ref={node => { email = node }} />
            <button type="submit">Add User</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export const AddLocationBlog = () => {
  let info;
  let author;
  let longitude;
  let latitude;

  return (
    <Mutation mutation={ADD_LOCATION_BLOG}>
      {(addLocationBlog, { data }) => (
        <div>
          ADD Location Blog
          <form
            onSubmit={e => {
              e.preventDefault();
              addLocationBlog({ variables: {
                    info: info.value,
                    author: author.value, 
                    longitude: parseInt(longitude.value),
                    latitude: parseInt(latitude.value)
                }});
              info.value = "";
              author.value = "";
              // longitude.value = 0
              // latitude.value = 0;
            }}
          >
            info
            <input ref={node => { info = node }} />
            author
            <input ref={node => { author = node }} />
            longitude
            <input ref={node => { longitude = node }} />
            latitude
            <input ref={node => { latitude = node }} />
            <button type="submit">Add Location Blog</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export const LikeLocationBlog = () => {
  let username;
  let blogID;

  return (
    <Mutation mutation={LIKE_LOCATION_BLOG}>
      {(addLocationBlog, { data }) => (
        <div>
          Like Location Blog
          <form
            onSubmit={e => {
              e.preventDefault();
              addLocationBlog({ variables: {
                    username: username.value,
                    blogID: blogID.value, 
                }});
              username.value = "";
              blogID.value = "";
            }}
          >
            username
            <input ref={node => { username = node }} />
            blogID
            <input ref={node => { blogID = node }} />
            <button type="submit">Add Location Blog</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};