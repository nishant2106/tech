import { faChartPie, faDatabase, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import React from "react";


const AppAbout: React.FC = () => {
    const items = [
        {
            key: "1",
            icon: <FontAwesomeIcon icon={faChartPie} />,
            title: "High Performance",
            content:
                "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
        },
        {
            key: "2",
            icon: <FontAwesomeIcon icon={faDesktop} />,
            title: "Flat Design",
            content:
                "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
        },
        {
            key: "3",
            icon: <FontAwesomeIcon icon={faDatabase} />,
            title: "Simplified Workflow",
            content:
                "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
        },
    ];
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>
                        {" "}
                        Deleniti, eligendi sapiente. Porro ea ex quos voluptates
                        labore.
                    </p>
                </div>
                <div className="contentHolder">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quam hic rem consequuntur placeat, porro labore
                        vel ab, blanditiis ratione ipsum impedit magnam! Minus
                        accusantium soluta tempora vero assumenda, autem
                        nostrum.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map((item) => {
                        return <Col md={{span:"8"}} key={item.key}>
                          <div className="content">
                            <div className="icon">
                              {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                          </div>
                        </Col>;
                    })}
                </Row>
            </div>
        </div>
    );
};
export default AppAbout;
