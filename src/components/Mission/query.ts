import gql from 'graphql-tag';

export const MissionsInfo = gql`
query MissionsInfo{
    launches {
      flight_number
      mission_name
      mission_id
      launch_success
      launch_year
    }
  }
` 