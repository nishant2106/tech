import { Card, Col, Row } from "antd";
import React from "react";

import image1 from "../../assets/images/modern-design.jpeg";
import image2 from "../../assets/images/clean-design.jpeg";
import image3 from "../../assets/images/great-support.jpeg";
import image4 from "../../assets/images/easy-customise.jpeg";
import image5 from "../../assets/images/unlimited-features.jpeg";
import image6 from "../../assets/images/advanced-option.jpeg";

const { Meta } = Card;
const AppFeature: React.FC = () => {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p></p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Modern Design" src={image1} />}
                        >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Clean and Elegant" src={image2} />}
                        >
                            <Meta title="Clean and Elegant" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Great Support" src={image3} />}
                        >
                            <Meta title="Great Support" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="East to Customize" src={image4} />}
                        >
                            <Meta title="East to Customize" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Unlimited Features" src={image5} />}
                        >
                            <Meta title="Unlimited Features" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="Andvance Options" src={image6} />}
                        >
                            <Meta title="Andvance Options" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AppFeature;
