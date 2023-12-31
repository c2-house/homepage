import { allPosts } from 'contentlayer/generated';
import { TagNavbar } from '@/components/Blog/Tags';
import PostList from '@/components/Blog/PostList';

const BlogPage = () => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container-lg">
      <TagNavbar currentTab="all" />
      <section className="pt-2 md:pt-5">
        <PostList posts={posts} countLabel="전체 글" />
      </section>
    </main>
  );
};

export default BlogPage;
