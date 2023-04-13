import React from "react";
import "./teamPage.css";
import Profile from "./PageParts/TeamPagePart";
import FrankPic from "../../Assets/ProfilePhotos/Frank.jpg";
import coralPic from "../../Assets/ProfilePhotos/Coral.jpeg";
import heatherPic from "../../Assets/ProfilePhotos/Heather.jpg";
import tanyaPic from "../../Assets/ProfilePhotos/TanyaNew.png";
import richiePic from "../../Assets/ProfilePhotos/Richie.jpg";
import bridgetPic from "../../Assets/ProfilePhotos/Bridget.jpg";

export default function TeamPage() {
  const teamProfiles = [
    {
      name: "Heather Dipietro",
      role: "Owner and Ceo",
      desc: `​​Heather, Mom to two grown girls, caught the travel bug more than 15 years ago when she booked a 10th anniversary trip for herself and her husband to Mexico.  That trip was booked with the agency where Jenn was working and an instant friendship was born! After extensive training and extensive travel, Heather has turned a passion for planning romance travel into a career she truly loves as owner of TravelSalesGroup! She especially likes working with brides and grooms to create their dream destination weddings and  luxury honeymoons.  Her other passion is custom creating exclusive private villa or high end river cruise experiences for her ever growing list of luxury clientele.  The biggest compliment our TravelSalesGirl gets is referrals from past clients.  Heather specializes in Tahiti, Bora Bora, Africa, Europe, Mexico, Jamaica, Punta Cana, St. Lucia, St. Martin/St. Maarten, The Hawaiian Islands, Barbados, Anguilla, Antigua, Aruba, The Bahamas, AM Resorts, Royalton Resorts, Hard Rock Resorts, Sandals Resorts,  El Dorado and Azul Resorts, Belmond Resorts, Conrad Resorts, Honeymoons, River Cruises, and of course, Destination Weddings!  She has been honored to be the very first SLEX Saint Lucia Expert and has a seat on the exclusive Antigua and Barbuda Agent Advisory Board.  Jenn and Heather both love their collection of #travelsalesgroupies!!`,
      favDest:
        "Favorite destinations: Way too many to name them all but Bora Bora, Anguilla, Hawaii, Switzerland Antigua, St Lucia, and Mexico top the list.",
      phone: "Direct Line: 518-885-8035",
      email: "Heather@TravelSalesGirl.com",
      picture: heatherPic,
      urlId: "Heather-DiPietro",
    },
    {
      name: "Tanya Nghiem",
      role: "Travel Consultant",
      desc: "Tanya is our expert on all things family, especially DISNEY! and Universal!  Her, her husband and their children travel to Disney Parks and Destinations at least 3 - 4 times a year.  There is noone out there that knows Disney better than Tanya.  She actually started as a friend and when we realized that she had this much Disney knowledge to share, we put her on the payroll.  She can book your dining reservations, arrange for your magic express transfers, make room requests, arrange calls from the Mouse himself and a myriad of other extras that Disney offers.  Reach out to Tanya today to get started on your family adventure!!  Walt Disney Travel Company College of Knowledge graduate, Universal Studios Specialist, Hawaiian Islands Master Specialist",
      phone: "Direct Line: 267-483-5767",
      email: "Tanya@TravelSalesGroup.com",
      favDest: "Favorite Destinations:  Walt Disney World and Aulani in O’ahu",
      picture: tanyaPic,
      urlId: "Tanya-Nghiem",
    },
    {
      name: "Frank DiPietro",
      role: "Travel Consultant",
      desc: "Frank got his start in the agency while travelling and filming with our owner (who just happens to be his wife).  His heart and his heritage have always pulled him toward travel in Europe, the Mediterranean and any destination that offered adventure travel.  Frank's family is originally from Sicily, so his interest started with his Italian father and grandparents. They immigrated to the US when his Dad was a child.  He sought to learn all he could about the areas that had been his family's roots. He has become a true specialist in all things Mediterranean, especially in Italy, Sicily, Greece, and France!  His areas of expertise expanded into Germany and Croatia, then Spain and Ireland.  He also has become a certified specialist for Viking River Cruises, AMAWaterways, Seabourne, Crystal, and Silverseas.  Whether it be a wine tour, a special honeymoon in the beautiful blue waters of Santorini, an art tour of Paris, golfing on the Emerald Isle or biking through the Sound of Music tour, our TravelSalesGuy can make that dream a reality!",
      phone: "Direct Line: 518-369-5730",
      email: "Frank@TravelSalesGuy.com",
      favDest:
        "Favorite Destinations:  St Martin, Switzerland, the USVI and Mexico",
      picture: FrankPic,
      urlId: "Frank-DiPietro",
    },
    {
      name: "Coral Staton",
      role: "Travel Consultant",
      desc: "Coral is no stranger to travel.  She began travelling the world at a very young age, exploring much of Mexico, South America, and Southern California in a volkswagen bus with her family!  Perhaps this is where Coral's passion for Health and Wellness / Adventure Travel came from!  Coral enjoys eco-tourism, ziplining, volcanic mud baths, spa trips, and horseback riding just for starters.  She specializes in planning adventure vacations like riding elephants in Thailand and Dive Tours in Belize.  Now, the Mom of two beautiful kids, Coral also has done her fair share of  yoga retreats and wellness groups at holistic resorts!  Looking for a little something different?  Coral is your girl!",
      phone: "​Direct Line: 770-272-5397​",
      email: "Coral@TravelSalesGroup.com",
      favDest:
        "Favorite Destinations:  Belize, Costa Rica, Mexico and Thailand",
      picture: coralPic,
      urlId: "Coral-Staton",
    },
    {
      name: "Bridget Merritt",
      role: "Travel Consultant",
      desc: "Bridget fell in love with travel when she came in as our Administrative Assistant.  Looking for a flexible career where she could stay home to be a supporting wife and mother to 2 girls, she took her first trip to Puerto Vallarta, Mexico and she was hooked.  She loves working with families, small groups and booking romantic vacations for couples and specializes in Mexico, Punta Cana and the Caribbean.  She is our agency go-to for travel within the US.  So if you have your eyes on the Keys in South Florida, heading to Alaska’s frozen tundra or anywhere in between she can make sure you have a memorable experience.   She is also our resident Cruising Advisor for Alaska, Mexico and the Caribbean.",
      phone: "Direct Line: 704-437-9117",
      email: "Bridget@TravelSalesGroup.com",
      favDest: "",
      picture: bridgetPic,
      urlId: "Bridget-Merritt",
    },
    {
      name: "Richie Dessureau",
      role: "Travel Consultant",
      desc: "Rich started with travel before he even started kindergarten when his parents took him on his first trip to Disney.  That was the first of many annual family vacations.  He visited Disney at least a dozen times over the years.  He has roadtripped throughout all of New England, went to college in New York City, then moved to the south and stayed a while in Nashville.  As he got older, his tastes turned toward the sand and surf and he traveled to Mexico and the Caribbean, visiting St Thomas, St Martin, and the US Virgin Islands.  So, as you can see, Rich is our newest team member, but he is far from new to traveling.  Rich will be helping with our groups and with your special Europe itineraries.",
      phone: "Direct Line: 518-527-3189",
      email: "Rich@TravelSalesGroup.com",
      favDest: "",
      picture: richiePic,
      urlId: "Richie-Dessureau",
    },
  ];

  return (
    <div className="teamPage">
      <h1 className="teamPageHeader">Our Team</h1>
      <hr className="teamPageHr" />
      {teamProfiles.map((agent) => {
        return <Profile agent={agent} />;
      })}
    </div>
  );
}
