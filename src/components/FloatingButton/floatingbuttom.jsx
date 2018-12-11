import React from 'react';
import {Menu, MainButton, ChildButton} from 'react-mfb';

const Buttom = () => {
    return (
        <Menu effect="zoomin" method="hover" position="br">
            <MainButton iconResting="ion-plus-round" iconActive="ion-close-round"/>
            <ChildButton icon ="ion-social-octocat" label="github" href=""/>
        </Menu>
    );
};

export default Buttom;