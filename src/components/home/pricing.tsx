import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, List } from "antd";
import React from "react";

const AppPricing: React.FC = () => {
    const data = [
        {
            title: "Basic",
            content: [
                {
                    price: "£29.99",
                    space: "1 GB of space",
                    user: "1 user",
                    support: "24/7 support",
                    backup: "Safe, reliable backup",
                    access: "Access from anywhere",
                },
            ],
        },
        {
            title: "Premium",
            content: [
                {
                    price: "£59.99",
                    space: "5 GB of space",
                    user: "5 users",
                    support: "24/7 support",
                    backup: "Safe, reliable backup",
                    access: "Access from anywhere",
                },
            ],
        },
        {
            title: "Enterprise",
            content: [
                {
                    price: "£99.99",
                    space: "Unlimited space",
                    user: "15 users",
                    support: "24/7 support",
                    backup: "Safe, reliable backup",
                    access: "Access from anywhere",
                },
            ],
        },
    ];
    return (
        <div className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose a plan to fit Your Needs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio.</p>
                </div>
            <div className="text-center">
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <p className="large">{item.content[0].price}</p>
                            <p>{item.content[0].space}</p>
                            <p>{item.content[0].user}</p>
                            <p>{item.content[0].support}</p>
                            <p>{item.content[0].backup}</p>
                            <p>{item.content[0].access}</p>
                            <Button type="primary" size="large">  Get Started <FontAwesomeIcon icon={faRightLong} /></Button>
                        </Card>
                    </List.Item>
                )}
            />
            </div>
            </div>
        </div>
    );
};

export default AppPricing;
