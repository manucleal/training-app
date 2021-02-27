const TrainingCounter = ({ trainingCounter }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-2">
                        <i className="pe-7s-graph1"></i>
                    </div>
                    <div className="stat-content">
                        <div className="text-left dib">
                            <div className="stat-heading">Training Counter</div>
                            <p>{ trainingCounter }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingCounter;