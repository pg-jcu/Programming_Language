import '../style/Sample.scss';

function Sample({ loadingPost, post }) {
  return (
    <div className="Sample">
      <section>
        <h1>Post</h1>
        {loadingPost && 'Loading...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
    </div>
  );
}

export default Sample;