import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import React, { useState } from "react";

const AppWorks: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it Works?</h2>
                    <p>Description of How it works</p>
                </div>
                <div className="contentHolder">
                    <Button type="primary" onClick={showModal}>
                        <FontAwesomeIcon icon={faPlay} />
                    </Button>
                </div>
                <Modal
                    title="MongoDB installation"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                     <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/watch?v=dmLRgRzvCjQ"></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default AppWorks;
