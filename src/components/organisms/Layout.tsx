type Props = { children: React.ReactNode };
function Layout({ children }: Props) {
  return (
    <>
      <header className="bg-white-01 px-2 py-1 text-center no-underline md:underline">
        Welcome to Atomic design
      </header>
      <div className="sticky top-0 bg-green-01 text-beige-01">
        <nav className="max-w-1200 flex justify-between items-center gap-4 mx-auto py-2 xl:px-4">
          <div className="text-sm cursor-pointer">Home</div>
          <ul className="flex gap-4">
            <li className="text-sm hover:underline cursor-pointer">Products</li>
            <li className="text-sm hover:underline cursor-pointer">Shop</li>
            <li className="text-sm hover:underline cursor-pointer">Blog</li>
            <li className="text-sm hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="max-w-1200 mx-auto xl:px-4">{children}</div>
      <footer className="flex justify-between items-center gap-2 bg-green-03 px-4 py-2">
        <span>Footer</span>
        <span className="text-xs">&copy; tranthientam293</span>
      </footer>
    </>
  );
}

export default Layout;
