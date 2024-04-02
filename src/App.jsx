import './App.css'
import React, {useRef, useState} from "react";

import Telegram from '../public/Telegram.webp';
import dextools from '../public/dextools.png';
import tictok from '../public/tik-tok.png';
import X from '../public/XXX.png';
import robot2 from '../public/robot2.png';
import robot1 from '../public/robot1.png';
import robot3 from '../public/robot3.png';
import robot4 from '../public/robot4.png';
import robotHead from '../public/robotHead.png';
import largeButton from '../public/large-button-depress_z10ogpnd.mp3';
import robot from '../public/44b7bdd82435f5a.mp3';
import fax from '../public/fax-machine-press-button-beep_g13on34o.mp3';
import suv from '../public/suv-chevy-blazer-1995-interior-tape-deck-stop-button-press_zjq9isnd.mp3';
import press from '../public/typewriter-press-single-button_fyi7yke_.mp3';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ForwardIcon from '@mui/icons-material/Forward';

import Card from "./Component/Card.jsx";
import {buyNow, socSeti} from "./style/index.js";
import {Avatar, Button} from "@mui/material";


function App() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPress, setIsPress] = useState([true, false, false, false]);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    // const soundArray = [largeButton, robot, fax, suv, press];
    // const sounds = soundArray.map(sound => new Audio(sound));
    const sound = new Audio(fax);

    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');

        if (window.scrollY > 0) {
            header.style.backgroundColor = '#2DD7F0';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (index) => {
        sound.play();

        const updatedState = isPress.map((_, i) => i === index);
        setIsPress(updatedState);

        sectionRefs[index].current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const copyToClipboard = () => {
        const textToCopy = 'here will be the address';

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

    };

    return (
        <div>
            <div id='header' style={{
                display: 'flex',
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '17px 0 17px 0',
                margin: '0 0',
                zIndex: 1000
            }}>
                <div style={{
                    maxWidth: '1080px',
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <a href="https://birdeye.so/token/F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726?chain=solana"
                       target="_blank">
                        <Button sx={buyNow}>BUY NOW</Button>
                    </a>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <button style={{
                            width: '135px',
                            marginLeft: '40px',
                            padding: '5px 5px',
                            textAlign: 'center',
                            backgroundColor: isPress[0] ? '#0e8308' : '#c40668',
                            color: '#FFFFFF',
                            boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} onClick={() => handleClick(0)}>HOME
                        </button>
                        <button style={{
                            width: '135px',
                            marginLeft: '40px',
                            padding: '5px 5px',
                            textAlign: 'center',
                            backgroundColor: isPress[1] ? '#0e8308' : '#c40668',
                            color: '#FFFFFF',
                            boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} onClick={() => handleClick(1)}>ABOUT
                        </button>
                        <button style={{
                            width: '135px',
                            marginLeft: '40px',
                            padding: '5px 5px',
                            textAlign: 'center',
                            backgroundColor: isPress[2] ? '#0e8308' : '#c40668',
                            color: '#FFFFFF',
                            boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} onClick={() => handleClick(2)}>TOKENOMICS
                        </button>
                        <button style={{
                            width: '135px',
                            marginLeft: '40px',
                            padding: '5px 5px',
                            textAlign: 'center',
                            backgroundColor: isPress[3] ? '#0e8308' : '#c40668',
                            color: '#FFFFFF',
                            boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} onClick={() => handleClick(3)}>HOW TO BUY
                        </button>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                            <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '10px'}}>
                            <Avatar src={X} sx={socSeti} alt="X"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '10px'}}>
                            <Avatar src={dextools} sx={socSeti} alt="Dextools"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '10px'}}>
                            <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>
                        </a>
                    </div>
                </div>

            </div>

            <div style={{
                maxWidth: '1080px',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 auto',
                paddingTop: '100px'
            }} ref={sectionRefs[0]}>
                <div style={{width: '55%', fontSize: '20px', color: '#1A1B1F'}}>
                    <div style={{fontSize: '28px', fontWeight: '600', color: '#000000', margin: '0'}}>HI, I`M</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: '45px', color: '#63626b', fontWeight: '600', margin: '0 30px 0 0'}}><span
                            style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span
                            style={{color: 'yellow'}}>B</span><span style={{color: 'green'}}>O</span><span
                            style={{color: 'blue'}}>T</span><span style={{color: 'indigo'}}>-</span><span
                            style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span
                            style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span
                            style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span
                            style={{color: 'violet'}}>W</span>&nbsp;<span
                            style={{color: 'red'}}>X</span></div>
                        {/*<div style={{*/}
                        {/*    display: 'flex',*/}
                        {/*    justifyContent: 'center',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    borderRadius: '50%',*/}
                        {/*    width: '85px',*/}
                        {/*    height: '85px',*/}
                        {/*    color: 'black',*/}
                        {/*    fontSize: '26px',*/}
                        {/*    fontWeight: '600',*/}
                        {/*    backgroundColor: '#f66623'*/}
                        {/*}}>$RRX*/}
                        {/*</div>*/}
                    </div>

                    <p style={{fontSize: '28px', fontWeight: '600'}}>
                        Robo-Rainbow X is the galaxy's most vibrant robot, turning every corner of the universe into a dazzling dance floor with its rainbow technology and empathy chips. This fun-loving AI is on a mission to spread joy, inclusivity, and an endless spectrum of colors, one epic party at a time.
                    </p>
                </div>

                <div style={{marginTop: '50px', cursor: 'pointer'}}>
                    {isHovered ? (
                        <img
                            src={robot2}
                            width='400px'
                            height='400px'
                            style={{borderRadius: '10px'}}
                            onMouseLeave={handleMouseLeave}
                            alt='robot'
                        />
                    ) : (
                        <div style={{position: 'relative'}}>
                            <img
                                src={robot1}
                                width='400px'
                                height='400px'
                                style={{borderRadius: '10px'}}
                                onMouseEnter={handleMouseEnter}
                                alt='robot'
                            />
                            <div style={{
                                position: 'absolute',
                                top: '50px',
                                left: '295px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                width: '85px',
                                height: '85px',
                                color: 'black',
                                fontSize: '26px',
                                fontWeight: '600',
                                backgroundColor: '#f66623'
                            }}>$RRX
                            </div>
                        </div>

                    )}
                </div>

            </div>
            {/*<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>*/}
            {/*    <Card index={0}/>*/}
            {/*    <Card index={1}/>*/}
            {/*    <Card index={2}/>*/}
            {/*    <Card index={3}/>*/}
            {/*    <Card index={4}/>*/}
            {/*</div>*/}

            <div style={{
                display: 'flex',
                maxWidth: '1080px',
                width: '100%',
                margin: '50px auto 20px auto',
                padding: '60px 60px 10px 60px',
                backgroundColor: '#000000',
                borderRadius: '10px'
            }} ref={sectionRefs[1]}>
                <div style={{
                    // width: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#BABABA',
                    fontSize: '14px',
                    // paddingRight: '60px'
                }}>
                    <p style={{fontSize: '26px', fontWeight: '800', color: '#32E7FF'}}>ABOUT</p>
                    <p style={{width: '60%', fontSize: '18px', fontWeight: '600', color: '#E1E1E1', margin: '0 0 14px 0'}}>What do you know about the feelings and emotions of robots?
                        Experience the power of the meme, mixed with a rainbow robotic space theme & topped off with revolutionary tokenomics</p>
                    <p style={{lineHeight: 2}}>Ladies and gentlemen, extraterrestrials, and AI of all circuits, gather around for the grand
                        introduction of a being like no other, hailing from the vibrant corners of the cosmos, please
                        put your hands, tentacles, or sensory appendages together for the one, the only – Robo-Rainbow
                        X!
                        Robo-Rainbow X is not your average robot. Born from a glitter explosion in the tech-savvy
                        Rainbow Realm, Robo-Rainbow was programmed with one purpose: to spread joy, inclusivity, and, of
                        course, rainbows!
                        Let's give a cosmic round of applause for Robo-Rainbow X, making the universe a brighter, more
                        inclusive place for all life forms, one epic party at a time!</p>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                        <p style={{fontSize: '20px', color: '#f6cab6', marginTop: '0'}}>Find out more about robotic love!</p>
                        <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', backgroundColor: '#000000'}}>
                <Card index={0}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '1080px',
                width: '100%',
                margin: '50px auto',
                padding: '80px 20px 10px 20px',
                backgroundColor: '#000000',
                borderRadius: '10px'
            }} ref={sectionRefs[2]}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                    <img src={robot4} style={{width: '150px', height: '150px'}}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#403f44', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', marginRight: '20px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>SUPPLY:</p>
                        <p>1 Billion</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#63626b', borderRadius: '10px', marginRight: '20px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>LP:</p>
                        <p>90.00% Of Liquidity Burned</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#403f44', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>10% Tokens</p>
                        <p>for Airdrop, Marketing, CEX listing</p>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#63626b', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', marginRight: '20px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>TAX SELL:</p>
                        <p>0%</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#403f44', borderRadius: '10px', marginRight: '20px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>TAX BUY:</p>
                        <p>0%</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#E1E1E1', fontSize: '18px', width: '33%', backgroundColor: '#63626b', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
                        <p style={{color: '#32E7FF', fontSize: '18px', fontWeight: '500'}}>Owner:</p>
                        <p>Revoked ( Mint+Freeze )</p>
                    </div>
                </div>

            </div>

            <div style={{
                display: 'flex',
                maxWidth: '1080px',
                width: '100%',
                margin: '50px auto',
                padding: '60px 60px 10px 60px',
                backgroundColor: '#000000',
                borderRadius: '10px'
            }} ref={sectionRefs[3]}>
                <div style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#BABABA',
                    fontSize: '14px',
                    paddingRight: '60px'
                }}>
                    <p style={{fontSize: '26px', fontWeight: '800', color: '#32E7FF'}}>HOW TO BUY</p>
                    <p>Our simple four-step guide helps make the buying process easier. Don’t allow a complex buying
                        procedure to scare you away.</p>
                    <p>Contract Address:</p>
                    <div style={{
                        display: 'flex',
                        backgroundColor: '#C3F9FD',
                        padding: '10px',
                        borderRadius: '3px',
                        width: 'max-content',
                        marginBottom: '10px'
                    }}>
                        <a href="https://snowtrace.io/address/0x13E793E76C38A6362f3F712c4AE365a9174f9b56"
                           target="_blank"
                           style={{marginRight: '5px', color: '#112f93'}}>here will be the address</a>
                        <ContentCopyIcon sx={{cursor: 'pointer', color: '#000000'}} onClick={copyToClipboard}/>
                    </div>
                    <ol style={{paddingLeft: '14px'}}>
                        <li style={{marginBottom: '15px'}}>Download phantom:
                            go to the app-store or chrome extensions and type in phantom wallet, download & follow the
                            prompts.
                        </li>
                        <li style={{marginBottom: '15px'}}>buy some Solana:
                            purchase Solana either on a centralized exchange or directly through your phantom wallet.
                        </li>
                        <li style={{marginBottom: '15px'}}>Swap to RRX:
                            copy the contract address found on website and paste in Raydium exchange or your TG buy bot
                            to swap your sol for RRX.
                        </li>
                        <li>Import to wallet:
                            if tokens don’t automatically appear in your wallet simply copy the ca and import manually.
                        </li>
                    </ol>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '70px'}}>
                    <img
                        src={robot3}
                        width='400px'
                        height='400px'
                        style={{borderRadius: '10px'}}
                        alt='robot'
                    />
                </div>
            </div>

            <div style={{
                display: 'flex',
                width: '100%',
                padding: '25px 0 25px 0',
                margin: '30px 0 0 0',
                backgroundColor: '#000000'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '1080px',
                    margin: '0 auto',
                    color: '#FFFFFF',
                    textAlign: 'center'
                }}>
                    <Avatar src={robotHead} sx={{width: '150px', height: '150px'}}/>
                    <div style={{fontSize: '25px', color: '#63626b', fontWeight: '500', margin: '30px 0 0 0'}}><span
                        style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span
                        style={{color: 'yellow'}}>B</span><span style={{color: 'green'}}>O</span><span
                        style={{color: 'blue'}}>T</span><span style={{color: 'indigo'}}>-</span><span
                        style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span
                        style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span
                        style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span
                        style={{color: 'violet'}}>W</span>&nbsp;<span
                        style={{color: 'red'}}>X</span></div>
                    <div style={{margin: '20px 0 30px 0', fontSize: '20px', color: '#E1E1E1'}}>
                        Join us on this exciting adventure as we journey through a world of robots, rainbows and
                        equality. Your journey with Robot-Rainbow starts now, let's make it legendary!
                    </div>
                    <div style={{fontSize: '16px', color: '#BABABA'}}>
                        Follow us on 𝕏 & Telegram to stay informed of our last updates.
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                            <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                            <Avatar src={X} sx={{...socSeti, filter: 'invert(100%)'}} alt="X"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                            <Avatar src={dextools} sx={socSeti} alt="Dextools"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                            <Avatar src={tictok} sx={{...socSeti, filter: 'invert(100%)'}} alt="Tic-Tok"/>
                        </a>
                    </div>
                    <p style={{color: '#BABABA'}}>Contuct us: <span>there will be an email here</span></p>
                </div>
            </div>

        </div>
    )

}

export default App
