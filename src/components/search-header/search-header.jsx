import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import SearchIcon from "@mui/icons-material/Search";

const SearchHeader = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-5 position-relative">
        <div className="position-absolute m-0 left-0 fs-20 h-100 fc-32 px-3 d-flex align-items-center">
          <LocationOnIcon
            style={{
              fontSize: "inherit",
            }}
          />
        </div>
        <div className="position-absolute end-0 fs-20 h-100 px-4 fc-32 d-flex align-items-center">
          <GpsFixedIcon
            style={{
              fontSize: "inherit",
            }}
          />
        </div>
        <input
          placeholder="New Delhi"
          className="form-input px-5 fw400 w-100 form-control fc-28 shadow-none fs-16"
        />
      </div>
      <div className="col-5 position-relative">
        <div className="position-absolute m-0 left-0 fs-20 h-100 fc-32 px-3 d-flex align-items-center">
          <SearchIcon
            style={{
              fontSize: "inherit",
            }}
          />
        </div>
        <input
          className="form-input fw400 px-5 w-100 form-control shadow-none fs-16"
          placeholder="Search medicines, healthcare products,..."
        />
      </div>
      <div className="col-2">
        <button className="w-100 btn shadow-none fw700 border-none nun-ff bg-cprimary fc-white br-16 fs-16 m-0">
          Get the App!
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
