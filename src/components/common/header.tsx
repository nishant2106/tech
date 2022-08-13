import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBolt } from '@fortawesome/free-solid-svg-icons'
import { Anchor } from 'antd';
import { Button, Drawer } from 'antd';

const { Link } = Anchor;
const AppHeader:React.FC = () => {
    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <FontAwesomeIcon color="blue" icon={ faBolt } />
                    <a href="/">Tech</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset={65}>
                        <Link href="#hero" title="Basic" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it Works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <Drawer placement="right" onClose={onClose} visible={visible}>
                    <Anchor targetOffset={65}>
                        <Link href="#hero" title="Basic" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it Works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;