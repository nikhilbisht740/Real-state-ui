import Card from "../../component/navbar/card/Card";
import Filter from "../../component/navbar/filter/Filter";
import { listData } from "../../lib/data";
import "./ListPage.scss";
import Map from "../../component/navbar/map/Map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};
export default ListPage;
