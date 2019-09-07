import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
  margin: 30px 0;
`;

const CardImg = styled.div`
  height: 100px;
  width: 100px;
  background: ${({ image }) => `url(${image}) no-repeat`};
  background-size: cover;
  border-radius: 5px;
  margin: -8px 0;
`;

const MPName = styled.h2`
  text-align: left;
  min-width: 400px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
  margin-top: 15px;
  margin-left: 20px;
  @media (max-width: 1024px) {
    min-width: 240px;
    margin-left: 5px;
    font-size: 1rem;
  }
`;

const Electorate = styled.h3`
  text-align: left;
  width: 149px;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 21px;
  margin: 0;
  margin-left: 20px;
`;

const Party = styled.h3`
  height: 40px;
  width: 130px;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: -0.53px;
  line-height: 21px;
  padding-top: 15px;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  @media (max-width: 1024px) {
    min-width: 150px;
  }
`;

const TimeServed = styled.h3`
  width: 136px;
  color: #ffffff;
  font-size: 0.8rem;
  letter-spacing: -0.53px;
  line-height: 21px;
  margin: 0px;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const Icon = styled.div`
  background: ${({ image }) => `url(${image}) no-repeat`};
  background-size: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const partyLogos = [
  "actSmall.jpg",
  "greenSmall.jpg",
  "labour.png",
  "national.,jpg",
  "nzFirstSmall,png"
];

const getImageName = arr => str => arr.find(e => e.includes(str));

const getPartyLogoImageName = getImageName(partyLogos);

const MPCard = ({ mp }) => (
  <Card>
    <div>
      <CardImg
        image={
          mp.image
            ? mp.image
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
        }
      />
    </div>
    <div>
      <MPName>{mp.Contact}</MPName>
      <Electorate>{mp.Electorate}</Electorate>
    </div>
    <FlexDiv>
      <Icon image={`/static/images/${getPartyLogoImageName(mp.Party)}`} />
      <Party>{mp.Party}</Party>
    </FlexDiv>
    <FlexDiv>
      <Icon image="/static/images/labour.png" />
      <TimeServed>2016 - Present 4 years, 12 months</TimeServed>
    </FlexDiv>
  </Card>
);

export default MPCard;