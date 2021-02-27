import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HealthCondition from "./HealthCondition";
import TrainingCounter from "./TrainingCounter";
import ChartImc from "./ChartImc.js";
import ChartTrainingType from "./ChartTrainingType";
import TrainingList from "./TrainingList";
import TrainingTypeList from "./TrainingTypeList";
import AddTraining from "./AddTraining";
import Footer from "./Footer";

// Services
import ApiService from "../services/ApiService.js";

const Dashboard = (props) => {

    useEffect(async () => {
        let responseGetTrainings = await ApiService.getTrainings();
        if (responseGetTrainings.length) {
            props.dispatch({ type: 'SET_TRAININGS', payload: responseGetTrainings });
        }
        let responseGetTrainingsTypes = await ApiService.getTrainingsTypes();
        if (responseGetTrainingsTypes.length) {
            props.dispatch({ type: 'SET_TRAININGS_TYPES', payload: responseGetTrainingsTypes });
        }
    }, []);

    if (!props.logged) return <Redirect to="/login" />;

    return (
        <>
            <Sidebar />
            <div id="right-panel" className="right-panel">
                <Header />
                <div className="content">
                    <div className="animated fadeIn">

                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <HealthCondition />
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <TrainingCounter trainingCounter={props.trainings.length} />
                            </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="orders">
                            <div className="row">
                                <TrainingList trainings={props.trainings} />
                                <div className="col-xl-4">
                                    <div className="row">
                                        <ChartImc />
                                        <AddTraining trainingType={props.trainingsTypes} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <TrainingTypeList />
                            </div>

                            <div className="col-lg-6">
                                <ChartTrainingType />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    logged: state.logged,
    trainings: state.trainings,
    trainingsTypes: state.trainingsTypes
})

export default connect(mapStateToProps)(Dashboard);