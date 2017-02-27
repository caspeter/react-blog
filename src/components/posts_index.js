import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; //isn't needed after our refactoring of the export
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

//This code does the same thing the export connect line does with fetchPosts
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(null, { fetchPosts })(PostIndex);
