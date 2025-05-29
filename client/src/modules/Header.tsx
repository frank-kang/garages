import { Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
    <header className="header flex justify-between items-center p-4 bg-blue-500 text-white">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <Outlet />
    </header>
    </div>
  );
}