import React from 'react';
import { Query, ApolloConsumer } from "react-apollo";
import { FIND_USER_BY_USERNAME } from '../statements/queries'


// This method works for all getAll methods
export const GenericAll = ({statement}) => (
    <Query query={statement}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        var key = Object.keys(data)[0]

        return data[key].map((user, idx) => {
          var keys = Object.keys(user)
          var displayUser = keys.map(key => {
            return <p>{key}: {JSON.stringify(user[key])}</p>
          })
          return <div>
                    Element {idx+1}
                    {displayUser}
                    <hr></hr>
                  </div>
        });
      }}
    </Query>
)

export class FindUserByUsername extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      user: null
    }
  }

  onUserFetched = user => this.setState(() => ({ user })); // actually fetching the user
  handleChange = event => this.setState({username: event.target.value}); // handles user input

  render() {
    var showUser = this.state.user != null ? JSON.stringify(this.state.user) : ""
    return (
      <ApolloConsumer>
            {client => (
              <div>
                <input type="text" value={this.state.username} onChange={this.handleChange} />
                <button
                  onClick={async () => {
                    const { data } = await client.query({
                      query: FIND_USER_BY_USERNAME,
                      variables: { username: this.state.username }
                    });
                    this.onUserFetched(data.findUserByUsername);
                  }}
                >
                  Find user!
                </button>
                <p>{showUser}</p>
              </div>
            )}
      </ApolloConsumer>
    )
  }
}