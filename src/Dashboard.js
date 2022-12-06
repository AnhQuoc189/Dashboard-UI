import './Dashboard.css'
import logo from'./img/logo.jpeg'

import { CgMicrosoft } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdFactCheck } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";    
import { IoIosAdd } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { VscPreview } from "react-icons/vsc";
import {useState} from 'react'

const orders=[
    {
        productName:'Anh Quoc',
        productNumber:'1360',
        paymentStatus:'Paid',
        shipping:'Decline'
    },
    {
        productName:'Thu Hien',
        productNumber:'1259',
        paymentStatus:'Paid',
        shipping:'pending'
    },{
        productName:'Dinh Khoi',
        productNumber:'1008',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },{
        productName:'Van Duy',
        productNumber:'1223',
        paymentStatus:'Paid',
        shipping:'pending'
    },{
        productName:'Phuoc Long',
        productNumber:'1154',
        paymentStatus:'Paid',
        shipping:'pending'
    },{
        productName:'Minh Nhat',
        productNumber:'1111',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },{
        productName:'Quoc Tuan',
        productNumber:'1888',
        paymentStatus:'Paid',
        shipping:'pending'
    },{
        productName:'Duc Minh',
        productNumber:'1777',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },{
        productName:'Khiet Tuong',
        productNumber:'1666',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },{
        productName:'Minh Chinh',
        productNumber:'1143',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },  
]


function DB(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    const HandleThemeToggle =()=>{
        document.body.classList.toggle('dark-theme-variables');
        SetCheckTG(!checkTG);
    }

    const [checkTG,SetCheckTG]=useState(false);

    return(
        <div className="container">
            <aside>
                <div class="top">
                    <img src={logo}></img>
                    <div class="tele">
                        <h2 class="text-muted">TEL<span class="danger">EXERCISE</span></h2>
                    </div>      
                </div>
                <div className="sidebar">
                    <a href="#">
                        <span class="material-symbols-outlined">
                            <CgMicrosoft />
                        </span>
                        <h3>Dashboard</h3>
                    </a>
                    <a href="#" className="active">
                        <span class="material-symbols-outlined">
                            <FiUser/>
                        </span>
                        <h3>Customers</h3>
                    </a>            
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <AiOutlineFileProtect/>
                        </span>
                        <h3>Orders</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <IoAnalytics/>
                        </span>
                        <h3>Analytics</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <BiMessageSquareDetail/>
                        </span>
                        <h3>Messages</h3>
                        <span className="message-count">26</span>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <MdFactCheck/>
                        </span>
                        <h3>Products</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <MdErrorOutline/>
                        </span>
                        <h3>Reports</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <FiSettings/>   
                        </span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <IoIosAdd/>
                        </span>
                        <h3>Add Product</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            <CgLogOut/>
                        </span>
                        <h3>Logout</h3>
                    </a>
                </div>
            </aside>
            <main>
                <h1>Dashboard</h1>
                <div className="date">
                    <h1>{date}</h1>
                </div>

                <div className="insights">
                    <div className="sales">
                        <span className="material-symbols-outlined">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>  
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                    {/* <!-- END OF SALES --> */}
                    <div className="expenses">
                        <span className="material-symbols-outlined">bar_chart</span>
                        <div className="middle">
                            <div className="left">   
                                <h3>Total Expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                        {/* END OF EXPENSES  */}
                    <div className="income">
                        <span className="material-symbols-outlined">stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$10,806</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                </div>
                {/* Recent-orders */}
                <div class="recent-orders">
                <h2>Recent-order</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85613</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr> */}
                        
                        {
                            orders.map(order=>(
                                <tr>
                                    <td>{order.productName}</td>
                                    <td>{order.productNumber}</td>
                                    <td>{order.paymentStatus}</td>
                                    <td className={order.shipping===
                                        'Decline'?'danger':order.
                                        shipping === 'pending'?'warning'
                                        :'primary'}>{order.shipping}</td>
                                    <td class="primary">Details</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
            </main>
            {/* RIGHT */}
            <div class="right">
            <div class="top">
                <button id="menu-btn">
                    <span class="material-symbols-outlined">menu</span>
                </button>
                <div class="theme-toggler" onClick={HandleThemeToggle}>
                    <span id={(checkTG==true)?"aaa":"bbb"}className="material-symbols-outlined">light_mode</span>
                    <span id={(checkTG==false)?"aaa":"bbb"}className="material-symbols-outlined">dark_mode</span>    
                </div>
                <div class="profile">
                    <div class="info">
                        <p>Hey, <b>AnhQuoc</b></p>
                        <small class="text-muted">Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src={logo}></img>
                    </div>
                </div>
            </div>
            {/* <!-- End OF TOP --> */}
            <div class="recent-updates">
                <h2>Recent Updates</h2>
                <div class="updates">
                    <div class="update">
                        <div class="profile-photo">
                            <img src={logo}></img>
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b>received his oder of Night lion tech PGS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src={logo}></img>
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b>received his oder of Night lion tech PGS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src={logo}></img>
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b>received his oder of Night lion tech PGS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>  
            {/* <!-- END OF RECENT-UPDATES --> */}
            <div class="sales-analytics">
                <h2>Sales Analytics</h2>
                <div class="item online">   
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            shopping_cart
                            </span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>ONLINE</h3>
                            <small class="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 class="danger">+39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div class="item offline">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            shopping_cart
                            </span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>OFFLINE ORDERS</h3>
                            <small class="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 class="success">-17%</h5>
                        <h3>1100</h3>
                    </div>
                </div>
                <div class="item online">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            person
                            </span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>NEW CUSTOMERS</h3>
                            <small class="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 class="success">+25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
                <div class="item add-product">
                    <div>
                        <span class="material-symbols-outlined">add</span>
                        <h3>Add Product</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>  
    )
}

export default DB