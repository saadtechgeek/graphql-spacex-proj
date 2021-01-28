import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'
import './MissionInfo.css';

interface Props {
    data: LaunchMissionInfoQuery
}

const className = 'MissionInfo';

const MissionInfo: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>Mission not available</div>;
      }
      console.log(data);
    return (
        // <div>
        //     <h3>Mission Details</h3>
        //     {/* {JSON.stringify(data)} */}
        // </div>
        <div className={className}>
        <div className={`${className}__status`}>
          {/* <span>Flight {data.launch.flight_number}: </span> */}
          {data.launch.launch_success ? (
            <span className={`${className}__success`}>Success</span>
          ) : (
            <span className={`${className}__failed`}>Failed</span>
          )}
        </div>
        <h1 className={`${className}__title`}>
          {data.launch.mission_name}
          {data.launch.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p className={`${className}__description`}>{data.launch.details}</p>
        {!!data.launch.links && !!data.launch.links.flickr_images && (
          <div className={`${className}__image-list`}>
            {data.launch.links.flickr_images.map(image =>
              image ? <img src={image} className={`${className}__image`} key={image} alt="Not Found"/> : null,
            )}
          </div>
        )}
      </div>
    )

    
}

export default MissionInfo