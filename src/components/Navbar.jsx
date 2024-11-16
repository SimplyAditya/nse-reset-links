import market_research from "../assets/market-research.png";
const Navbar = () => {


    return (
        <nav className="border-gray-200 bg-gray-900 border-b-0">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 mb-0">
                <a href="/" className="flex items-center justify-center space-x-8">
                    <img
                        src={market_research}
                        className="h-8"
                        alt="NSE"
                    />
                    <span className="lg:text-3xl font-semibold whitespace-nowrap dark:text-white">
                        NSE Study Data Reset Links
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
