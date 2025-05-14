import { useState } from 'react';
import { Link } from 'react-router'

export default function GetRequestApp() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Task 1: GET Request
  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=1`

      const response = await fetch(apiUrl, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error("Error fetching data")
      }
      const data = await response.json()
      console.log(data)

      setPosts(data)
    } catch (error) {
      setError(error.message)
      console.error('Error fetching data')
    } finally {
      setIsLoading(false)
    }

  };

  return (

    <>
      <div class="area w-full h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10">
        <ul class="circles relative w-full h-full overflow-hidden">
          <li class="circle circle1"></li>
          <li class="circle circle2"></li>
          <li class="circle circle3"></li>
          <li class="circle circle4"></li>
          <li class="circle circle5"></li>
          <li class="circle circle6"></li>
          <li class="circle circle7"></li>
          <li class="circle circle8"></li>
          <li class="circle circle9"></li>
          <li class="circle circle10"></li>
        </ul>
      </div>

      <div className="max-w-3xl mx-auto p-20">

        <div class="rounded bg-blue-500 px-4 py-2 hover:bg-blue-700 w-fit">
          <Link className="text-5xl underline font-bold text-white " to="/">Post</Link>
        </div>

        <h1 className="text-2xl font-bold mb-4">Task 1: GET Request Assessment</h1>
        <p className="mb-4">Fetch and display posts from user ID 1 using the JSONPlaceholder API.</p>
        <code className="block bg-gray-100 p-2 mb-4 rounded">GET https://jsonplaceholder.typicode.com/posts?userId=1</code>

        <button
          onClick={fetchPosts}
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          {isLoading ? 'Loading...' : 'Fetch Posts'}
        </button>

        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50 min-h-40">
          {error && (
            <div className="text-red-500 mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}

          {isLoading && <p className="text-gray-600">Loading posts...</p>}

          {!isLoading && !error && posts.length === 0 && (
            <p className="italic text-gray-500">Posts will appear here after clicking the Fetch Posts button...</p>
          )}

          {!isLoading && !error && posts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Posts from User 1</h2>
              <div className="space-y-4">
                {posts && posts.map((post) => (
                  <div key={post.id} className="p-4 border border-gray-200 rounded shadow-sm">
                    <h3 className="font-bold text-lg">{post.title}</h3>
                    <p className="my-2">{post.body}</p>
                    <div className="text-sm text-gray-600">
                      <p><strong>Post ID:</strong> {post.id}</p>
                      <p><strong>User ID:</strong> {post.userId}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
