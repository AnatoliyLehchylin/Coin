import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import robotHead from "../../../public/robotHead.png";
import Telegram from "../../../public/Telegram.webp";
import { SocSetiWrap, socSeti, FooterWrap, ContentWrap, avatar, NameWrap, FooterText, Follow, Email } from "./style/index.js";
import X from "../../../public/XXX.png";
import tictok from "../../../public/tik-tok.png";
import {Footer} from "../../Data/index.js";
import {MarginSocSeti} from "../../style/index.js";
import birdeyeOld from "../../../public/BirdeyeOld.jpg";
import dexscreener from "../../../public/Dexscreener.png";


function FooterComponent() {

    return (
        <div style={FooterWrap}>
            <div style={ContentWrap}>
                <Avatar src={robotHead} sx={avatar}/>
                <Box sx={NameWrap}><span
                    style={{color: 'red'}}>P</span><span style={{color: 'orange'}}>R</span><span
                    style={{color: 'yellow'}}>I</span><span style={{color: 'blue'}}>D</span><span style={{color: 'indigo'}}>E</span><span
                    style={{color: 'red'}}>B</span><span style={{color: 'orange'}}>O</span><span
                    style={{color: 'yellow'}}>T</span><span style={{color: 'green'}}>-</span><span
                    style={{color: 'blue'}}>X</span>
                    {/*<span style={{color: 'indigo'}}>X</span>*/}
                    {/*<span style={{color: '#c72b96'}}>W</span>&nbsp;<span*/}
                    {/*style={{color: 'red'}}>X</span>*/}
                </Box>
                <Box sx={FooterText}>{Footer}</Box>
                <Box sx={Follow}>
                    Follow us on 𝕏, Telegram & TikTok to stay informed of our last updates.
                </Box>
                <div style={SocSetiWrap}>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                        <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={X} sx={{...socSeti, filter: 'invert(100%)'}} alt="X"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={tictok} sx={{...socSeti, filter: 'invert(100%)'}} alt="Tic-Tok"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                        <Avatar src={birdeyeOld} sx={socSeti} alt="birdeye"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                        <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                    </a>
                </div>
                <Typography sx={Email}>Contact us: <span>there will be an email here</span></Typography>
            </div>
        </div>

    );
}

export default FooterComponent;