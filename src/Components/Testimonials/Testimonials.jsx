import React, { useRef } from 'react'
import './Testimonials.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


function Testimonials() {
    const slider = useRef();
    const next_btn = useRef();
    const back_btn = useRef();

    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
            next_btn.current.style.background = "rgb(33, 46, 160)";
            back_btn.current.style.background = "rgb(33, 46, 160)";
        }
        else {
            next_btn.current.style.background = " rgb(33, 46, 160, 0.5)";
            next_btn.current.style.cursor = "not - allowed";
            back_btn.current.style.background = "rgb(33, 46, 160)";
            back_btn.current.style.cursor = "pointer"
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
            back_btn.current.style.background = "rgb(33, 46, 160)";
            next_btn.current.style.background = "rgb(33, 46, 160);"
        }
        else {
            back_btn.current.style.background = "rgb(33, 46, 160, 0.5)";
            back_btn.current.style.cursor = "not - allowed"
            next_btn.current.style.background = "rgb(33, 46, 160)";
            next_btn.current.style.cursor = "pointer"
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className='testimonials'>
            <img src={Next_icon} alt="" className='next_btn' ref={next_btn} onClick={slideForward} />
            <img src={Back_icon} alt="" className='back_btn' ref={back_btn} onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h4>William Jackson 1</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursure my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly execeeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h4>William Jackson 2</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursure my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly execeeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h4>William Jackson 3</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursure my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly execeeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h4>William Jackson 4</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursure my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly execeeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials