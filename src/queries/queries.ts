import { gql } from "@apollo/client";

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    allExperiences {
      id
      title
      startDate
      endDate
      technologies
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    allProjects {
      id
      name
      link
    }
  }
`;

export const GET_SKILLS = gql`
  query GetSkills {
    allSkills {
      id
      name
      level
    }
  }
`;
