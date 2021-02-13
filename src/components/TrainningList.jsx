const TrainningList = ({ trainning }) => {
    console.log(trainning);
    return (
        <div className="col-xl-8">
            <div className="card">
                <div className="card-body">
                    <h4 className="box-title">Trainning</h4>
                </div>
                <div className="card-body--">
                    <div className="table-stats order-table ov-h">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="serial">#</th>
                                    <th className="avatar">Avatar</th>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Minutes</th>
                                    <th>Calories</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    trainning.map((t, i) => 
                                        <tr key={i}>
                                            <td className="serial">{i+1}.</td>
                                            <td className="avatar">
                                                <div className="round-img">
                                                    <a href="#"><img className="rounded-circle" src="images/avatar/1.jpg" alt="" /></a>
                                                </div>
                                            </td>
                                            <td>#{t.id}</td>
                                            <td><span className="name">{t.trainning_type}</span></td>
                                            <td><span className="product">{t.minutes}</span></td>
                                            <td><span className="count">{t.weight}</span></td>
                                            <td><span className="badge badge-complete">Complete</span></td>
                                        </tr>
                                    )
                                }
                                {/*<tr>
                                    <td className="serial">4.</td>
                                    <td className="avatar">
                                        <div className="round-img">
                                            <a href="#"><img className="rounded-circle" src="images/avatar/4.jpg" alt="" /></a>
                                        </div>
                                    </td>
                                    <td> #5466 </td>
                                    <td>  <span className="name">Mary Silva</span> </td>
                                    <td> <span className="product">Magic Mouse</span> </td>
                                    <td><span className="count">250</span></td>
                                    <td>
                                        <span className="badge badge-pending">Pending</span>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainningList;