export default function DownloadCV() {
  return (
    <a
      href="/cv.pdf"
      download
      className="fixed bottom-6 right-6 bg-lightAccent dark:bg-darkAccent text-white dark:text-black px-4 py-2 rounded-full shadow-lg"
    >
      Download CV
    </a>
  );
}
