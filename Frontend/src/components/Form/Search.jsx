import React from 'react';
import { useForm } from 'react-hook-form';
import "./style.css"
function CarForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Image File:', data.imageFile[0]);
    console.log('Car Number Plate:', data.carNumberPlate);
  };

  return (
    <div className="car-form-container">
      <h2>Car Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="car-form">
        <div className="form-group">
          <label htmlFor="imageFile">Upload Image:</label>
          <input
            type="file"
            id="imageFile"
            {...register('imageFile', { required: true })}
            className="form-control"
          />
          {errors.imageFile && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="carNumberPlate">Car Number Plate:</label>
          <input
            type="text"
            id="carNumberPlate"
            {...register('carNumberPlate', { required: true })}
            className="form-control"
          />
          {errors.carNumberPlate && <span className="error-message">This field is required</span>}
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default CarForm;
