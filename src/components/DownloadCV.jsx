export default function DownloadCV() {
  return (
    <a
      href="/cv.pdf"
      download
      className="fixed bottom-6 right-6 bg-yellow-300 dark:bg-yellow-400 text-black dark:text-white px-3 py-2 rounded-full shadow-lg"
    >
      Download CV
    </a>
  );
}
