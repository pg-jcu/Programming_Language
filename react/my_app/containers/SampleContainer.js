import { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost } from "../modules/sample";

function SampleContainer({ getPost, post, loadingPost }) {
  useEffect(() => {
    getPost(1);
  }, [getPost]);

  return (
    <Sample post={post} loadingPost={loadingPost} />
  );
}

export default connect(
  ({ sample }) => ({
    post: sample.post,
    loadingPost: sample.loading.GET_POST
  }),
  {
    getPost
  }
)(SampleContainer);