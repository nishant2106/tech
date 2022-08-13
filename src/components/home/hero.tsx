import React from "react";
import { Button, Carousel } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const AppHero:React.FC = () => {
    const items = [
        {
          key: '1',
          title: 'Web and mobile payment built for developers',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
          key: '2',
          title: 'Work better together. Schedule meetings',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
          key: '3',
          title: 'The best app to increase your productivity',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
      ]
      
    return(
        <div className="heroBlock">
            <Carousel>
                {items.map((item) => {
                    return (
                        <div className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn More</Button>
                                    <Button size="large"><FontAwesomeIcon icon={faDesktop} /> &nbsp; Watch a Demo</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                
            </Carousel>
        </div>
    )
}
export default AppHero;