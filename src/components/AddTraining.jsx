import { useState } from "react";
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import Select from 'react-select';

// Services
import ApiService from "../services/ApiService";

const AddTraining = ({ trainingType, dispatch }) => {

    const { register, errors, handleSubmit, reset } = useForm({});
    const [ selectedOption, setSelectedOption ] = useState([]);
    const allOptionsSelect = trainingType.map(t => ({ value: t.id, label: t.name } ));
    
    const handleChange = e => {
        setSelectedOption(e);
    }
    
    const onSubmit = async (data) => {
        let formatData = {
            minutes: Number(data.minutes),
            trainning_type: Number(selectedOption.value),
            weight: Number(data.weight)
        }
        let responseSaveTrainings = await ApiService.saveTrainings(formatData);
        console.log(responseSaveTrainings);
        if(responseSaveTrainings.status && responseSaveTrainings.status == 200){
            dispatch({ type: "SAVE_TRAINING", payload: formatData });
        }
    }

    return (
        <div className="col-lg-6 col-xl-12">
            <div className="card bg-flat-color-3">
                <div className="card-body">
                    <h4 className="card-title m-0  white-color ">Add Training</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Minutes" name="minutes" ref={
                                register({
                                    required: { value: true, message: 'Minutes is required' }
                                })
                            } />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.minutes?.message}
                            </span>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Weight" min="0" max="200" step=".01" name="weight"
                            ref={
                                register({
                                    required: { value: true, message: 'User weight is required' }
                                })
                            } />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.weight?.message}
                            </span>
                        </div>
                        <Select
                            placeholder="Choose One Training"
                            value={ selectedOption }
                            options={ allOptionsSelect }
                            onChange={ handleChange }
                        />
                        <button type="submit" id="submit-add-trinning" className="btn btn-success" >Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(AddTraining);