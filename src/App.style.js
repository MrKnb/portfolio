import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.colorDark};
  height: 150px;
  display: flex;
  flex: 1;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({theme}) => theme.breakpointMobile}) {
  flex-direction: column;
}
`;

// export const MidWrapper = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// `;

// export const Name = styled.h3`
// margin-bottom: 3px;
// `;

// export const Separator = styled.div`
//   margin-bottom: 5px;
//   height: 3px;
//   width: 200px;
//   border-radius: 1.5px;
//   background: ${({ theme }) => theme.colorLight};
// `;

// export const Description = styled.h3`
// margin-top: 3px;
// `;

export const LogoWrapper = styled.div`
margin-left: 2%;

@media (max-width: ${({theme}) => theme.breakpointMobile}) {
  margin-top: 5%;
}
`;

export const Contact = styled.div`
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    /* max-width: 550px; */
    /* margin: 0 auto; */
    /* padding-left: 10px; */

    a {
      flex: 1;
    }

    div {
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 5px;
    }

    img {
      object-fit: cover;
      height: 15px;
    }
`;

export const ContactIcon = styled.div``;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.colorDark};
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 80%;
`;

export const Main = styled.main`
  background: ${({ theme }) => theme.backgroundLight};
  color: ${({ theme }) => theme.colorDark};
  max-width: 800px;
  margin: 0 auto;
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    display: flex;
    align-items: center;

    > * {
      margin-right: 5px;
    }

  }  

  p {
    font-size: 0.7rem;
  }
`;

export const Technologies = styled.div`
  display: flex;
`;

export const FrontendWrapper = styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;
`;

export const FrontendHeader = styled.h4`
display: flex;
justify-content: center;
align-items: center;
text-decoration: underline;
`;

export const FrontendTech = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media (max-width: ${({theme}) => theme.breakpointMobile}) {
  width: 100%;
}
`;

export const BackendWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`;

export const BackendHeader = styled.h4`
display: flex;
justify-content: center;
align-items: center;
text-decoration: underline;
`;

export const BackendTech = styled.div`
width: 400px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media (max-width: ${({theme}) => theme.breakpointMobile}) {
  width: 100%;
}
`;

export const Technology = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  text-align: center;

  p {
    opacity: 0.7;
  }
`;

export const TechIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  transition: all 0.2s;
  background: ${({ theme }) => theme.backgroundDark};

  :hover {
    background: ${({ theme }) => theme.colorButtons};
    color: ${({theme}) => theme.colorLight}
  }

  & svg {
    height: 1.5rem;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SingleProject = styled.div`
  background-color: #DEDEDE;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;

  @media (max-width: ${({theme}) => theme.breakpointMobile}) {
  flex-direction: column;
  align-items: center;
}
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: ${({theme}) => theme.breakpointMobile}) {
  width: 100%;
}

  img {
    max-height: 200px;
    border-radius: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colorLight};

    @media (max-width: ${({theme}) => theme.breakpointMobile}) {
  max-width: 100%;
}
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 50%;

  @media (max-width: ${({theme}) => theme.breakpointMobile}) {
  width: 100%;
}
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;

export const ProjectStack = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    background: ${({ theme }) => theme.colorDark};
    color: ${({ theme }) => theme.colorLight};
    border-radius: 5px;
    padding: 3px;
    margin: 3px;
    font-size: 0.8rem;
  }
`;

export const ProjectDescription = styled.div``;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  a {
    margin: 10px 0 0px 30px;
    padding: 15px;
    border-radius: 10px;
    background: ${({theme}) => theme.colorButtons};
    color: ${({theme}) => theme.colorLight};

    :hover {}
  }
`;
