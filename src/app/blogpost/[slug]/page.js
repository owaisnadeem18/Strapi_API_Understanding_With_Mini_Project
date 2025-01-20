export default async function Page({ params }) {
    try {
      // Extract the slug from the params
      const { slug } = params;
  
      // Return the JSX with the slug displayed
      return (
        <div className="min-h-[79vh] flex items-center justify-center bg-gray-100">
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg text-center">
            <h1 className="text-2xl font-bold mb-4">My Post</h1>
            <p className="text-gray-700">
              <strong>Slug:</strong> {slug || "No slug provided"}
            </p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error in Page component:", error);
  
      // Fallback UI in case of errors
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-red-500 text-lg">Error loading post. Please try again.</p>
        </div>
      );
    }
  }
  