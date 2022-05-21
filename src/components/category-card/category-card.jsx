import { IMAGES } from "../../constants/IMAGES";

const CategoryCard = ({ cat }) => {
  return (
    <div className="bg-white shadow-sm w-100 br-8 border">
      <div
        className="bg-banner d-flex align-items-center justify-content-center px-3"
        style={{ height: 160 }}
      >
        <img alt="category" className="w-100 h-75" src={IMAGES.Categroy} />
      </div>
      <div style={{ height: 60 }} className="p-2">
        <p className="text-center ff-nun trunc-line two-liner fw600 fs-16 m-0">
          {cat?.name}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
