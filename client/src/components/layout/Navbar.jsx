const Navbar = () => {
    return (
        <header className="border-b bg-yellow-400">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                <h1 className="text-xl font-bold text-yellow-800">
                    Shalivahana Connect
                </h1>

                <nav className="flex items-center gap-4">

                    <a
                        href="/"
                        className="text-sm font-medium text-blue-700 hover:text-black"
                    >
                        Home
                    </a>

                    <a
                        href="/login"
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                    >
                        Login
                    </a>

                </nav>

            </div>
        </header>
    );
};

export default Navbar;