import React, { useEffect, useState } from 'react'
import Side from './Side'
import { CiFileOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaJediOrder } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { IoIosContact } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";





const Home = () => {
    const [count, setdata] = useState(0);
    useEffect(() => {
        setdata("first")
    }, [])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 col-sm-12'>
                        <Side />

                    </div>
                    <div className='col-lg-10 col-sm-12 mt-5'>
                        <nav class="navbar navbar-expand-lg navbar-light ">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#"><button className='btn btn-dark' >Quick Action</button></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#"><button className='btn btn-dark'><CiFileOn />+Creat order</button></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><button className='btn btn-dark'><CiFileOn />Share Quote</button></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><button className='btn btn-dark'><GiHamburgerMenu />Add Product
                                            </button></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><button className='btn btn-dark'><IoIosNotificationsOutline />
                                            </button></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><button className='btn btn-dark'><IoMdContact />  Perfect Engineering

                                            </button></a>
                                        </li>





                                    </ul>

                                </div>
                            </div>
                        </nav>
                        <div className='row'>
                            <div className='col-6'>
                                <div>
                                    <div class="card" style={{ width: "30rem" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Welcome Back</h5>
                                            <h1 class="card-subtitle mb-2 ">Perfect Engineering</h1>
                                            <p class="card-text">your Profile URL</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="  card mt-5" style={{ width: "30rem" }}>
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between align-items-center p-2'>
                                            <h5 class="card-title">Card title</h5>
                                            <input type='date' className='border-light border' />
                                            <button className='btn btn-dark'><VscDebugRestart /></button>
                                            <button className='btn btn-dark'>+create</button>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>  <p><button style={{ display: "flex", fontSize: '150%' }}>✅<p style={{ color: "green" }}>3000 <br></br><p>Confirmed</p></p>
                                            </button></p></div>
                                            <p><button style={{ display: "flex", fontSize: '150%' }}>✅<p style={{ color: "green" }}>3000 <br></br><p>Confirmed</p></p>
                                            </button></p></div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <p><button style={{ display: "flex", fontSize: '150%' }}>✅<p style={{ color: "green" }}>3000 <br></br><p>Confirmed</p></p>
                                            </button></p>
                                            <p><button style={{ display: "flex", fontSize: '150%' }}>✅<p style={{ color: "green" }}>3000 <br></br><p>Confirmed</p></p>
                                            </button></p></div>


                                    </div>
                                </div>
                            </div>
                            <div className='col-6' style={{ height: '80vh', border: '1px solid #dadada', overflow: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #dadada' }}>
                                    <div>
                                        <h3>Inbox</h3>
                                    </div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <button onClick={() => setdata('first')}>Leads</button>
                                        <button onClick={() => setdata('sec')}>Chats</button>

                                    </div>
                                </div>
                                {
                                    count === "first" ? <>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <div>
                                                    <h><FaCalendar />
                                                        Electronics</h>
                                                        <br></br>
                                                        <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                                </div>
                                            </div>
                                            <div />

                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />   Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />   Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />   Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', border: '1px solid #dadada', padding: "4px" }}>
                                            <div><IoIosContact />  Aman Sharma</div>
                                            <div>
                                                <h><FaCalendar />
                                                    Electronics</h>
                                                    <br></br>
                                                    <h><FaNetworkWired />
                                                    IOT Sensor</h>
                                            </div>
                                            <div>
                                                <h3>
                                                    17/04/23
                                                </h3>
                                            </div>
                                            <div>
                                                ➡➡➡
                                            </div>
                                        </div>

                                    </> : ""
                                }
                                {
                                    count === "sec" ? <>
                                        <h1>            Aman Sharma</h1>
                                    </> : ""
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home