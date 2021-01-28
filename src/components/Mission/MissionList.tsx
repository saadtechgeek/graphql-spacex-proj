import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql'
import './MissionList.css';

export interface OwnProps {
    handleIdChange: (newId: any) => void;
  }
  
  const className = 'MissionList';

interface Props extends OwnProps {
    data: MissionsInfoQuery
}
const MissionList: React.FC<Props> = ({ data,handleIdChange  }) => {
    return (
        <div className={className}>
        <h3>Missions</h3>
        <ol className={`${className}__list`}>
          {!!data.launches &&
            data.launches.map(
              (launch, i) =>
                !!launch && (
                  <li key={i} className={`${className}__item`} onClick={() => handleIdChange(launch.flight_number!)}>
                    {launch.mission_name} ({launch.launch_year})
                  </li>
                ),
            )}
        </ol>
      </div>
    )
}

export default MissionList