import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionList from './MissionInfo';

interface OwnProps {
    id: any;
  }
const MissionInfoContainer = ({id}:OwnProps) => {
    console.log(id);
    const { data, loading, error } = useLaunchMissionInfoQuery({
        variables: { id: '25' },
    });

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <MissionList data={data} />
    )
}

export default MissionInfoContainer