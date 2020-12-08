import React from 'react';
import './meetings.css';
import pic1 from '../../Assets/MeetingPics/1.jpg';
import pic2 from '../../Assets/MeetingPics/2.jpg';
import pic3 from '../../Assets/MeetingPics/3.jpg';
import pic4 from '../../Assets/MeetingPics/4.jpg';
import pic5 from '../../Assets/MeetingPics/5.jpg';
import pic6 from '../../Assets/MeetingPics/6.jpg';
import pic7 from '../../Assets/MeetingPics/7.jpg';
import pic8 from '../../Assets/MeetingPics/8.jpg';
import pic9 from '../../Assets/MeetingPics/9.jpg';
import pic10 from '../../Assets/MeetingPics/10.jpg';
import pic11 from '../../Assets/MeetingPics/11.jpg';
import firstPic from '../../Assets/MeetingPics/image001.jpg';

export default () => {

    // ['http://23.21.66.147/mediasite/wp-content/uploads/2014/09/SEARM_Ballroom_School_1A.jpg', 'http://23.21.66.147/mediasite/wp-content/uploads/2014/09/SEARM_Fuego_Breakout_Room_2-458x305.jpg'], ['http://23.21.66.147/mediasite/wp-content/uploads/2014/09/SEARM_GalaDinner_Ceiba_1-458x305.jpg', 'http://23.21.66.147/mediasite/wp-content/uploads/2014/09/SEARM_MICE_GalaDinner_pool_2A.jpg'], ['http://23.21.66.147/mediasite/wp-content/uploads/2020/02/NOSRC-GRP-BALLROOM-3A-458x305.jpg', 'http://23.21.66.147/mediasite/wp-content/uploads/2018/01/DREVC-WED-GalaDinner-Pier-2A-RGB-458x305.jpg'], ['http://23.21.66.147/mediasite/wp-content/uploads/2018/01/DREVC-GRP-Ballroom-1A-RGB-458x305.jpg', 'http://23.21.66.147/mediasite/wp-content/uploads/2018/01/DREVC-GRP-Breakout-1B-RGB-458x305.jpg'],

    const meetingsPics = [ [firstPic, pic1], [pic2, pic3], [pic4, pic7], [pic8, pic9], [pic10, pic11], [pic5, pic6]]

    return (
        <div className="meetingsDiv">
            {meetingsPics.map(imgPair => {
                return (
                    <div className="meetingsImgPair">
                        <img src={imgPair[0]} className="meetingsPic" />
                        <img src={imgPair[1]} className="meetingsPic" />
                    </div>
                )
            })}
        </div>
    )
}