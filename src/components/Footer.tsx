export default function Footer() {
  return (
    <>
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex">
            <span className="mb-2 text-xl font-bold">
              <a href="/">Your Brand</a>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Your Brand. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
