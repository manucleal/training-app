import { connect } from 'react-redux';

const WeightVariation = ({ trainings }) => {
    const lastIndex = trainings.length -1;
    const lastWeight = (trainings.length) ? trainings[lastIndex].weight : 0;
    const penultimateWeight = (lastIndex > 0) ? trainings[lastIndex -1].weight : '';

    return (
        <div className="card">
            <div className="card-body">
                <div className="stat-widget-five">
                    <div className="stat-icon dib flat-color-2">
                        <i className="pe-7s-pen"></i>
                    </div>
                    <div className="stat-content">
                        <div className="text-left dib">
                            <div className="stat-heading">Weight Variation</div>
                            <p>KG {penultimateWeight} - KG {lastWeight} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    trainings: state.trainings
})

export default connect(mapStateToProps)(WeightVariation);