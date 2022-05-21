import AppHeader from "../../components/app-header/app-header";
import SearchHeader from "../../components/search-header/search-header";
import DeliveryBoy from "../../assets/images/delivery-boy.png";
import "./landing.css";
import HighSellingMeds from "../../components/high-selling-meds/high-selling-meds";
import Categories from "../../components/categories/categories";
import { connect } from "react-redux";
import { staticConfigData } from "../../redux/actions/user-actions";
import { useCallback, useEffect } from "react";
const Landing = ({ staticConfigData, staticConfigDataObj }) => {
  const init = useCallback(() => {
    staticConfigData();
  }, [staticConfigData]);
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="landing-page">
      {staticConfigDataObj && (
        <div>
          <div
            style={{
              background:
                "linear-gradient(244.12deg, #6663FF -11.32%, #5CD2D5 124.92%)",
            }}
            className="px-4"
          >
            <AppHeader />
            <SearchHeader />
            <div className="user-select-none d-flex align-items-center my-2 py-4 justify-content-center w-100">
              <img
                alt="delivery boy"
                width="32"
                height="32"
                className="mx-2"
                src={DeliveryBoy}
              />
              <p className="text-white text-center m-0 fw700 fs-24 nun-ff">
                Currently Delivering Medicines in 15 Minutes!
              </p>
              <img
                alt="delivery boy"
                width="32"
                height="32"
                className="mx-2"
                src={DeliveryBoy}
              />
            </div>
          </div>

          <div
            className="bg-banner w-100"
            style={{
              minHeight: 300,
            }}
          />

          <HighSellingMeds
            data={staticConfigDataObj?.highSellingMeds?.slice(0, 4)}
          />
          <div className="px-4">
            <div
              className="bg-banner w-100"
              style={{
                minHeight: 200,
              }}
            />
          </div>

          <HighSellingMeds
            data={staticConfigDataObj?.highSellingMeds?.slice(0, 4)}
          />

          <Categories data={staticConfigDataObj?.categories} />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  staticConfigData,
};
const mapStateToProps = (state) => ({
  staticConfigDataObj: state.user.staticConfigDataObj,
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
