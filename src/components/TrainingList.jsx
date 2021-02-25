import { connect } from 'react-redux';

// Services
import ApiService, { login } from "../services/ApiService";

const TrainingList = ({ training, dispatch }) => {
    
    const deleteTraining = async (id) => {
        let responseDeleteTrainings = await ApiService.deleteTrainings(id);
        if(responseDeleteTrainings.message && responseDeleteTrainings.message == 'Entrenamiento borrrado satisfactoriamente'){
            dispatch({ type: "DELETE_TRAINING", payload: id });
        }
    }

    return (
        <div className="col-xl-8">
            <div className="card">
                <div className="card-body">
                    <h4 className="box-title">Training</h4>
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
                                    training.map((t, i) => 
                                        <tr key={i}>
                                            <td className="serial">{i+1}.</td>
                                            <td className="avatar">
                                                <div className="round-img">
                                                    <a href="#"><img className="rounded-circle" src="images/avatar/avatar.png" alt="" /></a>
                                                </div>
                                            </td>
                                            <td>#{t.id}</td>
                                            <td><span className="name">{t.trainning_type}</span></td>
                                            <td><span className="product">{t.minutes}</span></td>
                                            <td><span className="count">{t.weight}</span></td>
                                            <td><span className="badge badge-pending" onClick={ () => deleteTraining(t.id) } >Delete</span></td>
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

})

export default connect(mapStateToProps)(TrainingList);