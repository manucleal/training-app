import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Alert } from './/Alert';
import Sidebar from "./Sidebar";
import Header from "./Header";
import HealthCondition from "./HealthCondition";
import TrainingCounter from "./TrainingCounter";
import WeightVariation from "./WeightVariation";
import ChartImc from "./ChartImc";
import ChartTrainingType from "./ChartTrainingType";
import TrainingList from "./TrainingList";
import TrainingTypeList from "./TrainingTypeList";
import AddTraining from "./AddTraining";
import Footer from "./Footer";

// Services
import ApiService from "../services/ApiService.js";

const Dashboard = ({ trainings, trainingsTypes, logged, dispatch }) => {
    let responseGetTrainings = [];
    let responseGetTrainingsTypes = [];
    
    const groupBy = (trainingsList, trainingsListTypes) => {
        const map = new Map();
        trainingsList.forEach((item) => {            
            const trainingName = trainingsListTypes.find(tt => tt.id == item.trainning_type).name;
            if (map.has(trainingName)) {                
                map.set(trainingName, map.get(trainingName) + item.minutes );
            } else {
                map.set(trainingName, item.minutes);
            }
        });
        return Array.from(map, ([ trainingsTypes, minutes ]) => ({ trainingsTypes, minutes }));
    }

    useEffect(async () => {
        if(logged){
            responseGetTrainings = await ApiService.getTrainings();
            responseGetTrainingsTypes = await ApiService.getTrainingsTypes();
            if (responseGetTrainingsTypes.length) {                
                dispatch({ type: 'SET_TRAININGS_TYPES', payload: responseGetTrainingsTypes });                                
            }
            if(responseGetTrainings.length){
                responseGetTrainings = responseGetTrainings.sort((a, b) => a.id - b.id);
                dispatch({ type: 'SET_TRAININGS', payload: responseGetTrainings });
                dispatch({ type: "SET_TRAINING_TYPES_MIN", payload: groupBy(responseGetTrainings, responseGetTrainingsTypes) });
            }
        }
    }, [logged]);

    useEffect(() => {  
        dispatch({ type: "SET_TRAINING_TYPES_MIN", payload: groupBy(trainings, trainingsTypes) });
    },[trainings, trainingsTypes]);

    if (!logged) return <Redirect to="/login" />;

    return (
        <>
            <Sidebar />
            <div id="right-panel" className="right-panel">
                <Header />
                <Alert />
                <div className="content">
                    <div className="animated fadeIn">

                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <HealthCondition />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <TrainingCounter trainingCounter={trainings.length} />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <WeightVariation />
                            </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="orders">
                            <div className="row">
                                <TrainingList trainings={trainings} />
                                <div className="col-xl-4">
                                    <div className="row">
                                        <ChartImc />
                                        <AddTraining trainingType={trainingsTypes} />
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