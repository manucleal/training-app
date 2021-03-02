import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import Select from 'react-select';

// Services
import ApiService from "../services/ApiService";
import { alertService } from '../services/alert.service';

const AddTraining = ({ trainingType, dispatch }) => {

    const { register, errors, handleSubmit, reset } = useForm({});
    const [ selectedOption, setSelectedOption ] = useState([]);
    
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
        if(responseSaveTrainings.status && responseSaveTrainings.status == 200){
            window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
            alertService.success('Training added', { keepAfterRouteChange: true });
            formatData.id = responseSaveTrainings.data.trainingID;
            dispatch({ type: "SAVE_TRAINING", payload: formatData });
            reset();
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
                        { trainingType !== 0 ? (
                            <Select
                                placeholder="Choose One Training"
                                value={ selectedOption }
                                // options={ allOptionsSelect }
                                options={ trainingType.map(t => ({ value: t.id, label: t.name } )) }
                                formatOptions
                                onChange={ handleChange }
                            />
                        ) : (
                            <p>Loading .. </p>
                        )}
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