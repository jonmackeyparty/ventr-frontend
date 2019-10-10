import React from 'react'
import Tweet from './Tweet'

class Tweets extends React.Component {

  render() {
    return (
      <>{!this.props.errors &&
          <div>
            {this.props.tweets.map((tweet, index) =>
              <div key={index}><Tweet tweet={tweet} url={this.props.url} username={this.props.username} screen_name={this.props.screen_name} />
              </div>)
            }
          </div>
        }
      </>
    )
  }
}

export default Tweets
