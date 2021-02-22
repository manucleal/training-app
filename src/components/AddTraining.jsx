import { useRef, useState } from "react";
import Select from 'react-select';

const AddTraining = (props) => {
    
    const { trainingType, addTraining } = props;
    console.log(trainingType);
    // Selected Options select
    const [ selectedOption, setSelectedOption ] = useState([]);

    const minutes = useRef(null);
    const weight = useRef(null);

    const allOptionsSelect = trainingType.map(t => ({ value: t.id, label: t.name } ));
    
    const handleChange = e => {
        setSelectedOption(e);
    }

    const getData = e => {
        addTraining({ 
            minutes: Number(minutes.current.value),
            training_type: Number(selectedOption.value),
            weight: Number(weight.current.value)
        });
    }

    console.log(trainingType);
    
    return (
        <div className="col-lg-6 col-xl-12">
            <div className="card bg-flat-color-3">
                <div className="card-body">
                    <h4 className="card-title m-0  white-color ">Add Training</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Minutes" ref={ minutes } />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Weight" min="0" max="200" step=".01" ref={ weight } />
                        </div>
                        <Select
                            placeholder="Choose One Training"
                            value={ selectedOption }
                            options={ allOptionsSelect }
                            onChange={ handleChange }
                        />
                        <button id="submit-add-trinning" className="btn btn-success" onClick={ getData } >Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTraining;