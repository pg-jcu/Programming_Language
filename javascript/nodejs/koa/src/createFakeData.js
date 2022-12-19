import Post from './models/post.js';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `post #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum ex luctus mauris iaculis porttitor. Nunc gravida risus at neque volutpat eleifend. Nulla erat erat, sollicitudin ut pretium non, iaculis at erat. Nunc tristique laoreet ipsum in accumsan. Proin tempor sapien ipsum, et elementum velit eleifend mollis. Ut finibus, elit feugiat finibus iaculis, arcu mauris accumsan mi, sit amet accumsan nisl dolor feugiat risus. Vivamus placerat congue magna a luctus. Aenean ultrices urna sit amet maximus ullamcorper. Quisque consectetur a est quis molestie. Integer quis nibh non metus luctus dignissim sit amet nec dui. Praesent egestas, ex non condimentum ultrices, nulla ligula faucibus quam, ac feugiat felis ligula id quam. Sed ut scelerisque mi. Nunc a risus finibus nunc interdum auctor. Nam a libero quis dolor varius posuere. Fusce facilisis magna ut odio scelerisque mattis. Nunc eu erat quis orci ullamcorper commodo a id dolor. Duis consequat ultrices porta. Praesent sodales porttitor felis. Sed velit eros, accumsan eget suscipit id, maximus eget lacus. Vivamus feugiat tempor odio, in hendrerit erat egestas at. Proin nulla mauris, tristique tincidunt placerat at, facilisis vitae ligula. Quisque efficitur at ligula id venenatis. Praesent finibus euismod lectus scelerisque laoreet. Praesent luctus purus ac orci accumsan.',
    tags: ['fake', 'data']
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}