import React from "react";
import "./ourTeamSection.css";
import TeamCard from "../TeamCard/TeamCard";
import NewTeamCard from "../newTeamCard/newTeamCard";
import FrankPic from "../../../Assets/ProfilePhotos/Frank.jpg";
import coralPic from "../../../Assets/ProfilePhotos/Coral.jpeg";
import heatherPic from "../../../Assets/ProfilePhotos/Heather.jpg";
import tanyaPic from "../../../Assets/ProfilePhotos/TanyaNew.png";
import richiePic from "../../../Assets/ProfilePhotos/Richie.jpg";
import bridgetPic from "../../../Assets/ProfilePhotos/Bridget.jpg";

const OurTeamSection = () => {
  const agents = [
    {
      name: "Heather DiPietro",
      picture: heatherPic,
      desc: "Heather is an expert with your Luxury Experiences, Honeymoons, Anniversaries, Destination Weddings, Incentive and Conference Groups, Europe, River Cruises, Caribbean, Mexico, Tahiti, Bora Bora, New Zealand, Hawaii.",
      phone: "518-885-8035",
      email: "Heather@TravelSalesGirl.com",
    },
    {
      name: "​Tanya Nghiem",
      picture: tanyaPic,
      desc: "Our resident Disney Princess (including Disney cruises, Adventures by Disney, and all parks), Universal Vacations, Family Travel, Hawaii, Mexico.",
      phone: "267-483-5767",
      email: "​Tanya@TravelSalesGroup.com",
    },
    {
      name: "Coral Staton",
      picture: coralPic,
      desc: "Namaste – Yoga Retreats, Adventure Travel, Thailand, South America, Family Travel, Some Cruises.",
      phone: "770-272-5397​",
      email: "Coral@TravelSalesGroup.com",
    },
    {
      name: "Frank DiPietro",
      picture: FrankPic,
      desc: "Specialties include AMAWaterways River Cruises, Viking River Cruises, Golf and Fishing Trips, European Adventures.",
      phone: "518-369-5730",
      email: "Frank@TravelSalesGuy.com",
    },
    {
      name: "Bridget Merritt",
      picture: bridgetPic,
      desc: "She loves working with families, small groups and booking romantic vacations for couples and specializes in Mexico, Punta Cana and the Caribbean.",
      phone: "704-437-9117",
      email: "Bridget@TravelSalesGroup.com",
    },
    {
      name: "Richie Dessureau",
      picture: richiePic,
      desc: "Rich started with travel before he even started kindergarten when his parents took him on his first trip to Disney.  That was the first of many annual family vacations.  He visited Disney at least a dozen times over the years.  He has roadtripped throughout all of New England, went to college in New York City, then moved to the south and stayed a while in Nashville.  As he got older, his tastes turned toward the sand and surf and he traveled to Mexico and the Caribbean, visiting St Thomas, St Martin, and the US Virgin Islands.  So, as you can see, Rich is our newest team member, but he is far from new to traveling.  Rich will be helping with our groups and with your special Europe itineraries.",
      phone: "518-527-3189",
      email: "Rich@TravelSalesGroup.com",
    },
  ];

  const makeCard = (item, i) => {
    return (
      <NewTeamCard
        key={i}
        name={item.name}
        picture={item.picture}
        desc={item.desc}
        phone={item.phone}
        email={item.email}
      />
    );
  };

  return (
    <div className="ourTeamSection" id="ourTeamSection">
      <h2 className="teamSectionHeader">Our Agents</h2>
      <hr className="teamSectionHr" />
      {/* <newTeamCard /> */}
      <div className="cardContainer">
        {agents.map((item, i) => {
          if (i < 3) {
            return makeCard(item, i);
          }
        })}
      </div>
      <div className="cardContainer">
        {agents.map((item, i) => {
          if (i >= 3) {
            return makeCard(item, i);
          }
        })}
      </div>
    </div>
  );
};

export default OurTeamSection;
