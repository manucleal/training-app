import Footer from "./Footer";
import Header from "./Header";
import TrainningList from "./TrainningList";

const Dashboard = () => {
    return (
        <div id="right-panel" className="right-panel">
            <Header />
            <div className="content">
                {/* <!-- Animated */}
                <div className="animated fadeIn">
                    {/* <!-- Widgets  */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-five">
                                        <div className="stat-icon dib flat-color-1">
                                            <i className="pe-7s-cash"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="text-left dib">
                                                <div className="stat-text">$<span className="count">23569</span></div>
                                                <div className="stat-heading">Revenue</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-five">
                                        <div className="stat-icon dib flat-color-2">
                                            <i className="pe-7s-cart"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="text-left dib">
                                                <div className="stat-text"><span className="count">3435</span></div>
                                                <div className="stat-heading">Sales</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-five">
                                        <div className="stat-icon dib flat-color-3">
                                            <i className="pe-7s-browser"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="text-left dib">
                                                <div className="stat-text"><span className="count">349</span></div>
                                                <div className="stat-heading">Templates</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-five">
                                        <div className="stat-icon dib flat-color-4">
                                            <i className="pe-7s-users"></i>
                                        </div>
                                        <div className="stat-content">
                                            <div className="text-left dib">
                                                <div className="stat-text"><span className="count">2986</span></div>
                                                <div className="stat-heading">Clients</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Widgets */}

                    <div className="clearfix"></div>
                    {/* <!-- Orders */}
                    <div className="orders">
                        <div className="row">
                            <TrainningList />
                            <div className="col-xl-4">
                                <div className="row">
                                    <div className="col-lg-6 col-xl-12">
                                        <div className="card br-0">
                                            <div className="card-body">
                                                <div className="chart-container ov-h">
                                                    <div id="flotPie1" className="float-chart"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-12">
                                        <div className="card bg-flat-color-3  ">
                                            <div className="card-body">
                                                <h4 className="card-title m-0  white-color ">August 2018</h4>
                                            </div>
                                            <div className="card-body">
                                                <div id="flotLine5" className="flot-line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .orders To Do and Live Chat */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title box-title">To Do List</h4>
                                    <div className="card-content">
                                        <div className="todo-list">
                                            <div className="tdl-holder">
                                                <div className="tdl-content">
                                                    {/* <ul>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox"/><i className="check-box"></i><span>Conveniently fabricate interactive technology for ....</span>
                                                            <a href='#' className="fa fa-times"></a>
                                                            <a href='#' className="fa fa-pencil"></a>
                                                            <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    <li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox"/><i className="check-box"></i><span>Creating component page</span>
                                                            <a href='#' className="fa fa-times"></a>
                                                            <a href='#' className="fa fa-pencil"></a>
                                                            <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" checked/><i className="check-box"></i><span>Follow back those who follow you</span>
                                                            <a href='#' className="fa fa-times"></a>
                                                            <a href='#' className="fa fa-pencil"></a>
                                                            <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" checked/><i className="check-box"></i><span>Design One page theme</span>
                                                            <a href='#' className="fa fa-times"></a>
                                                            <a href='#' className="fa fa-pencil"></a>
                                                            <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" checked/><i className="check-box"></i><span>Creating component page</span>
                                                            <a href='#' className="fa fa-times"></a>
                                                            <a href='#' className="fa fa-pencil"></a>
                                                            <a href='#' className="fa fa-check"></a>
                                                        </label>
                                                    </li>
                                                </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* .todo-list */}
                                    </div>
                                </div>
                                {/* .card-body */}
                            </div>
                            {/* .card */}
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title box-title">Live Chat</h4>
                                    <div className="card-content">
                                        <div className="messenger-box">
                                            <ul>
                                                <li>
                                                    <div className="msg-received msg-container">
                                                        <div className="avatar">
                                                            <img src="images/avatar/64-1.jpg" alt="" />
                                                            <div className="send-time">11.11 am</div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div className="inner-box">
                                                                <div className="name">
                                                                    John Doe
                                                            </div>
                                                                <div className="meg">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* .msg-received */}
                                                </li>
                                                <li>
                                                    <div className="msg-sent msg-container">
                                                        <div className="avatar">
                                                            <img src="images/avatar/64-2.jpg" alt="" />
                                                            <div className="send-time">11.11 am</div>
                                                        </div>
                                                        <div className="msg-box">
                                                            <div className="inner-box">
                                                                <div className="name">
                                                                    John Doe
                                                            </div>
                                                                <div className="meg">
                                                                    Hay how are you doing?
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* .msg-sent */}
                                                </li>
                                            </ul>
                                            <div className="send-mgs">
                                                <div className="yourmsg">
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <button className="btn msg-send-btn">
                                                    <i className="pe-7s-paper-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* .messenger-box */}
                                    </div>
                                </div>
                                {/* .card-body */}
                            </div>
                            {/* .card */}
                        </div>
                    </div>
                    {/* To Do and Live Chat  Calender Chart Weather  */}
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    {/* <h4 className="box-title">Chandler</h4> */}
                                    <div className="calender-cont widget-calender">
                                        <div id="calendar"></div>
                                    </div>
                                </div>
                            </div>
                            {/* .card */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card ov-h">
                                <div className="card-body bg-flat-color-2">
                                    <div id="flotBarChart" className="float-chart ml-4 mr-4"></div>
                                </div>
                                <div id="cellPaiChart" className="float-chart"></div>
                            </div>
                            {/* .card */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card weather-box">
                                <h4 className="weather-title box-title">Weather</h4>
                                <div className="card-body">
                                    <div className="weather-widget">
                                        <div id="weather-one" className="weather-one"></div>
                                    </div>
                                </div>
                            </div>
                            {/* .card */}
                        </div>
                    </div>
                    {/* Calender Chart Weather */}
                    {/* <!-- Modal - Calendar - Add New Event */}
                    <div className="modal fade none-border" id="event-modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 className="modal-title"><strong>Add New Event</strong></h4>
                                </div>
                                <div className="modal-body"></div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success save-event waves-effect waves-light">Create event</button>
                                    <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* #event-modal  Modal - Calendar - Add Category */}
                    <div className="modal fade none-border" id="add-category">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 className="modal-title"><strong>Add a category </strong></h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Category Name</label>
                                                <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">Choose Category Color</label>
                                                <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                                    <option value="success">Success</option>
                                                    <option value="danger">Danger</option>
                                                    <option value="info">Info</option>
                                                    <option value="pink">Pink</option>
                                                    <option value="primary">Primary</option>
                                                    <option value="warning">Warning</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* #add-category */}
                </div>
                {/* animated */}
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;