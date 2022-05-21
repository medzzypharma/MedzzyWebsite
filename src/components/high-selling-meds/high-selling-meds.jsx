import MedCard from "../med-card/med-card";

const HighSellingMeds = ({ data }) => {
  return (
    <div id="highSellingMeds" className="p-4">
      <div className="px-3 d-flex justify-content-between">
        <p className="ff-nun fw600 fs-32 fc-primary m-0">
          High Selling Medicines
        </p>
        <p className="ff-nun fw600 fs-24 fc-2c m-0">See More</p>
      </div>
      <div className="d-flex flex-wrap">
        {data.map((prod) => (
          <div className="col-12 col-md-3 p-3" key={prod?._id}>
            <MedCard key={prod?._id} prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighSellingMeds;
