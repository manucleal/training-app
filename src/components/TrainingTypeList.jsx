import { connect } from 'react-redux';

const TrainingTypeList = ({ trainingsTypesMin }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title box-title">Minutes per type of trainings</h4>
                <div className="card-content">
                    <div className="table-stats order-table ov-h">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="serial">#</th>
                                    <th className="avatar">Avatar</th>
                                    <th>Type</th>
                                    <th>Minutes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    trainingsTypesMin.map((t, i) =>
                                        <tr key={i}>
                                            <td className="serial">{i + 1}.</td>
                                            <td className="avatar">
                                                <div className="round-img">
                                                    <a href="#"><img className="rounded-circle" src="images/avatar/avatar.png" alt="" /></a>
                                                </div>
                                            </td>
                                            <td><span className="name">{t.trainingsTypes}</span></td>
                                            <td><span className="product">{t.minutes}</span></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => ({
    trainingsTypesMin: state.trainingsTypesMin
})

export default connect(mapStateToProps)(TrainingTypeList);
