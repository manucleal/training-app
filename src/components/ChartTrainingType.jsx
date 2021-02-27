import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

const ChartTrainingType = ({ trainingsTypesMin }) => {
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title box-title">Chart</h4>
                <Line
                    data={{
                        labels: trainingsTypesMin.map( ttm => ttm.trainingsTypes ),
                        datasets: [
                            {
                                label: "Minutes",
                                data: trainingsTypesMin.map( ttm => ttm.minutes )
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    trainingsTypesMin: state.trainingsTypesMin
})

export default connect(mapStateToProps)(ChartTrainingType);