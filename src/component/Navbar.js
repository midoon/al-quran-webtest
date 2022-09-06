const Navbar = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="navbar bg-white fixed z-10 top-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case lg:text-3xl" href="/">
            <span className="text-primary">Qur</span>.an
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input  bg-slate-200"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <button className="btn bg-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
