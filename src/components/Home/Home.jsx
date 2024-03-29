import React, { useEffect, useState } from 'react'
import hand from '../../assets/hand.png'
import logo from '../../assets/logo.png'
import './Home.css'

function Home() {
    let [ii1, setii1] = useState("");
    let [ii2, setii2] = useState("");
    let [ii3, setii3] = useState("");
    let [ii4, setii4] = useState("");
    let [ii5, setii5] = useState("");
    let [ihh, setihh] = useState("");
    let [flag, setFlag] = useState("true")
    let [style, setStyle] = useState()
    let [imgStyle, setImgStyle] = useState("")

    useEffect(() => {
        setii1('ii1')
        setii2('ii2')
        setii3('ii3')
        setii4('ii4')
        setii5('ii5')
        setihh('ihh')
        setTimeout(() => {
            setFlag(false)
            setStyle('hidden')
            setImgStyle("logo2")
        }, 2000)
    })
    return (
        <div className='home'>
            {flag && <div className='anim-div'>
                <img src={hand} className={`i i1 ${ii1}`} />
                <img src={hand} className={`i i2 ${ii2}`} />
                <img src={hand} className={`i i3 ${ii3}`} />
                <img src={hand} className={`i i4 ${ii4}`} />
                <img src={hand} className={`i i5 ${ii5}`} />
                <div className={`i ih ${ihh}`} style={{ position: 'relative', width: '30%', height: '70%', overflow: 'hidden' }}>
                    <img src={hand} style={{ width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', clipPath: 'inset(0 0 50% 0)' }} />
                </div>
            </div>}
            {!flag && <div className='anim-div .anim-div2' style={{ position: 'absolute', left: 'calc(50vw - 45vmin)', overflow: style, fontSize: 'small' }}>
                <img src={logo} className={`logo ${imgStyle}`} />
                <button className='btn b b1 rounded'><p className='btnp rounded'><b>Promotion Events</b></p></button>
                <button className='btn b b2'><p className='btnp rounded'><b>Shop Opening & Branding</b></p></button>
                <button className='btn b b3'><p className="btnp rounded"><b>Cantervan indoor / outdoor</b></p></button>
                <button className='btn b b4'><p className="btnp rounded"><b>Manpower</b></p></button>
                <button className='btn b b5'><p className="btnp rounded"><b>Brand Installation</b></p></button>
            </div>}
        </div>
    )
}

export default Home