export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="font-bold text-xl">
        Micky T
      </h1>

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/software">Software</a>
        <a href="/projects">Projects</a>
        {/* <a href="/articles">Articles</a> */}
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}