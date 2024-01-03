import { allPosts } from 'contentlayer/generated';
import { TagNavbar } from '@/components/Blog/Tags';
import PostList from '@/components/Blog/PostList';

const BlogPage = () => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container-lg">
      <TagNavbar currentTab="all" />
      <section className="pt-5">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default BlogPage;
