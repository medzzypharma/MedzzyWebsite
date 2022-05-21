import { IMAGES } from "../../constants/IMAGES";
import { formatMrp } from "../../utils/appUtils";

const MedCard = ({ prod }) => {
  return (
    <div className="bg-white shadow w-100 br-8 border">
      <img
        alt="med"
        className="w-100"
        src={IMAGES.Med}
        style={{ height: 200 }}
      />
      <div className="p-3">
        <p className="ff-nun fw600 fs-24 m-0 trunc-line one-liner">
          {prod?.item_name}
        </p>
        <p className="ff-nun fw040 fs-16 trunc-line one-liner">
          {prod?.product_details["Name of Manufacturer/Marketer"]}
        </p>
        <div className="d-flex mb-2">
          <p className="ff-nun fw600 fs-20 m-0 me-2">
            {formatMrp(prod?.best_price)}
          </p>
          <p className="ff-nun fw600 fs-20 line-through m-0">
            {formatMrp(prod?.price)}
          </p>
        </div>

        <div className="px-3">
          <button className="w-100 btn shadow-none fw400 border-none nun-ff bg-csecondary fc-white rounded fs-16 m-0">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedCard;
