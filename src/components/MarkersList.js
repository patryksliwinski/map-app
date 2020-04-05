import React, { useContext } from "react";
import MarkerContext from "../contexts/MarkerContext";
import { Button } from "reactstrap";

const MarkersList = () => {
  const { markersList, setMarkersList } = useContext(MarkerContext);

  const removeMarker = (selectedItem) => {
    setMarkersList((state) =>
      state.filter((item, itemIndex) => {
        if (selectedItem !== itemIndex) return true;
        item.remove();
        return false;
      })
    );
  };

  const generateList = () => markersList.map((marker, index) =>
    <div className="d-flex flex-row justify-content-between align-items-center bg-secondary mb-2 p-2 text-white rounded" key={index}>
      <div>
        <p className="mb-0">Lng: {marker.getLngLat().lng}</p>
        <p className="mb-0">Lat: {marker.getLngLat().lat}</p>
      </div>
      <Button color="danger" onClick={() => removeMarker(index)}>Delete marker</Button>
    </div>
  );

  return (
    <div>
      {markersList.length ? generateList() :
        (<div className=" bg-secondary mb-2 p-2 text-white rounded">
          <p className="mb-0">There is no pin on the map yet.</p>
        </div>)
      }
    </div>
  );
};

export default MarkersList;
