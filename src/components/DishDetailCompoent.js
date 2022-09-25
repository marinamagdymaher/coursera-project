import axios from "axios";
import { useEffect, useState } from "react";
import { Card }  from "reactstrap";


function DishDetail() {
  const [dishDetail, setDishDetail] = useState([]);

  useEffect(() => {
    axios
      .get("/data")
      .then((res) => {
        setDishDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    {/* const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
    );
  }); */}

      <h1>Dish Details</h1> (
      <div className="container">
        <div className="row">
          {dishDetail.map((dish) => {
            return <Card key={dish.id} list={dish} />;
          })}
        </div>
      </div>
      )
    </>
  );
}

export default DishDetail;
