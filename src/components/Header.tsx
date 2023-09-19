import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="sticky top-0 z-10">
      <nav className="px-[1.5rem] py-2 bg-deep-purple-400">
        <ul className="flex items-center text-[0.75rem] justify-between text-gray-500">
          <li>
            <Link href={"/"} className="text-pink-100">
              <b>Beranda</b>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white">
              Artikel
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white">
              Masuk/Daftar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
