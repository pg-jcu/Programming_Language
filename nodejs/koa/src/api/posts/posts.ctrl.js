let postId = 1;

const posts = [
  {
    id: 1,
    title: 'title',
    body: 'body'
  }
];

export const write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;

  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

export const list = (ctx) => {
  ctx.body = posts;
};

export const read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id === +id);

  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: 'The post does not exist.'
    };
    return;
  }
  ctx.body = post;
};

export const remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id === +id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'The post does not exist.'
    };
    return;
  }

  posts.splice(index, 1);
  ctx.status = 204;
};

export const replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id === +id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'The post does not exist.'
    };
    return;
  }

  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

export const update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id === +id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'The post does not exist.'
    };
    return;
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body
  };
  ctx.body = posts[index];
};