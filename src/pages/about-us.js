import TimeContent from "../components/timeContent";

const About = (props) => {
    const date1 = "2008"
    return (
        <div className="main-band">
            <div className="timeline">
                <div className="timeRow row1">
                    <div className="blank blank1"></div>
                    <div className="timeBox timeContainer1">
                        <TimeContent date= {date1}/>
                    </div>
                </div>
                <div className="spacer">
                    <div className="spacer1"></div>
                    <div className="spacer2"></div>
                    <div className="spacer3"></div>
                </div>
                <div className="timeRow row2">
                    <div className="timeBox timeContainer2">
                        <TimeContent date= {date1}/>
                    </div>
                    <div className="blank blank2"></div>
                </div>
                <div className="spacer"></div>
                <div className="timeRow row3">
                    <div className="blank blank3"></div>
                    <div className="timeBox timeContainer3">
                        <TimeContent date= {date1}/>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="timeRow row4">
                    <div className="timeBox timeContainer4">
                        <TimeContent date= {date1}/>
                    </div>
                    <div className="blank blank4"></div>
                </div>
                <div className="spacer"></div>
                <div className="timeRow row5">
                    <div className="blank blank1"></div>
                    <div className="timeBox timeContainer5">
                        <TimeContent date= {date1}/>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="timeRow row6">
                    <div className="timeBox timeContainer6">
                        <TimeContent date= {date1}/>
                    </div>
                    <div className="blank blank5"></div>
                </div>
            </div>
        </div>
        
    )
}

export default About;