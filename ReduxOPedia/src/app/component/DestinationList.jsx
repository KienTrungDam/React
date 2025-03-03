import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { destinationClick } from '../../redux/store'
function DestinationList() {
    const dispatch = useDispatch();
    const destinationList = useSelector((state) => state.destinationStore.destinations);
  return destinationList.map((destination, index) => {
    return(
        <div className='text-center text-black row' style={{borderBottom: "1px solid #999"}} key={index}>
        <div className="col-8 col-md-3 offset-md-3 pt-2">
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <button className="btn btn-success form-control m-1" onClick={() => dispatch(destinationClick(destination))}>Details</button>
        </div>
    </div>
    );
  });
    
}

export default DestinationList;
