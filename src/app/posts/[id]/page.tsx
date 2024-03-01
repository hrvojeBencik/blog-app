type PostParams = { params: { id: string } };

export default function PostPage({ params }: PostParams) {
  // fetch single post
  return (
    <div>
      <h1>Post with id: {params.id}</h1>
    </div>
  );
}
