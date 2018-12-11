import React from 'react';

import {
    ChildButton,
    FloatingMenu,
    MainButton
} from 'react-floating-button-menu';
import {
    FaFacebookF as Facebook,
    FaTwitter as Twitter
} from 'react-icons/fa';
import Logo from '../../assets/Images/Logo/logo.png';
import style from './floatingbuttom.module.css';

export default class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    
    render() {
        return <FloatingMenu
            className={`${style.fixed}`}
            slideSpeed={500}
            direction="left"
            spacing={8}
            isOpen={this.state.isOpen}
        >
            <MainButton
                iconResting={<img className="img-fluid" src={Logo} alt="Logo Sodium Cycle"/>}
                iconActive={<img className="img-fluid" src={Logo} alt="Logo Sodium Cycle"/>}
                backgroundColor="black"
                onClick={() => this.setState({isOpen: !this.state.isOpen})}
                size={65}
            />
            <ChildButton
                Style={'overflow: hidden;'}
                icon={<Facebook style={{fontSize: 30}}/>}
                backgroundColor="white"
                size={40}
                onClick={() => console.log('First button clicked')}
            />
            <ChildButton
                Style={'overflow: hidden;'}
                icon={<Twitter style={{fontSize: 30}} />}
                backgroundColor="white"
                size={40}
            />
        </FloatingMenu>;
    }
}