import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const AppHeader = () => {
  return (
    <div className="row pt-4 pb-2 justify-content-between">
      <div className="col-12 col-md-5 justify-content-between d-flex align-items-center">
        <p className="m-0 nun-ff fw700 fc-white fs-32">medzzy</p>
        <a
          href="#allCategories"
          className="remove-link nun-ff fw400 fc-white fs-20"
        >
          All Categories
        </a>
        <a
          href="#highSellingMeds"
          className="remove-link nun-ff fw400 fc-white fs-20 m-0"
        >
          High Selling Meds
        </a>
      </div>

      <div className="col-12 col-md-3 justify-content-between d-flex align-items-center">
        <a href="#cart" className="remove-link nun-ff fw400 fc-white fs-20 m-0">
          <ShoppingCartOutlinedIcon />
        </a>
        <div className="d-flex align-items-center">
          <a
            href="#SignIn"
            className="remove-link nun-ff fw400 fc-white fs-20 m-0"
          >
            Sign in
          </a>
          <p className="nun-ff fw400 fc-white fs-20 m-0">&nbsp;|&nbsp;</p>
          <a
            href="#createAccount"
            className="remove-link nun-ff fw400 fc-white fs-20 m-0"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
