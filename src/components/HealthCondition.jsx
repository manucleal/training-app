import { useEffect } from "react";
import { connect } from 'react-redux';

const HealthCondition = ({ trainings, imc }) => {
    
    const health = { good: 'Your health is good', medium: 'Your health is medium', bad: 'Your health is bad' };
    const lastWeight = trainings[trainings.length -1].weight;

    const showMessage = () => {
        const lastImc = imc[imc.length -1];
        if(lastImc > 10 && lastImc < 24){
            return health['good'];
        } else if((lastImc >= 24 && lastImc <= 27) || (lastImc <= 9 && lastImc >= 3)){
            return health['medium'];
        } else {
            return health['bad'];
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-1">
                        <i className="pe-7s-user"></i>
                    </div>
                    <div className="stat-content">
                        <div className="text-left dib">
                            <div className="stat-heading">Health Condition - KG {lastWeight}</div>
                            <p>{showMessage()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    trainings: state.trainings,
    imc: state.imc
})

export default connect(mapStateToProps)(HealthCondition);