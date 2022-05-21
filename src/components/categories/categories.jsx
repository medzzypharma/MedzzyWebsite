import CategoryCard from "../category-card/category-card";

const Categories = ({ data }) => {
  return (
    <div id="allCategories" className="p-4">
      <div className="px-3 d-flex justify-content-between">
        <p className="ff-nun fw600 fs-32 fc-black m-0">Categories</p>
      </div>
      <div className="d-flex flex-wrap">
        {data.map((cat) => (
          <div className="col-12 col-md-2 p-3" key={cat?._id}>
            <CategoryCard key={cat?._id} cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
