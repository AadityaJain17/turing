import React, { useState } from 'react';
import {TextField, Button, FormControl, FormHelperText, FormLabel, CircularProgress} from '@mui/material';
import Row from "./Row";
import { Check, Close } from '@mui/icons-material';

const intiState = {
    name: '',
    email: '',
    message: '',
}

const ContactForm = () => {
  const [formData, setFormData] = useState(intiState);
  const [errors, setErrors] = useState(intiState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(intiState);
    setErrors(intiState);
    setIsSubmitting(false);
    setSubmitSuccess(false);
    setSubmitError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {
      name: !/^[A-Za-z\s'-]+$/.test(formData.name.trim()) || formData.name.trim()  === '' ? 'Name is required & can only consist of letters, spaces, hyphens, and apostrophes' : '',
      email: !/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email.trim()) ? 'Email is required & must bevalid' : '',
      message: formData.message.trim().length < 1 ? 'Message cannot be empty' : '',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      // Submit your form data or perform any other actions here
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitError(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        resetForm();   
      }, 2000);
    }
    else {
      setIsSubmitting(false);
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);   
      }, 2000);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal" error={!!errors.name}>
        <FormLabel>Name</FormLabel>
        <TextField
          name="name"
          value={formData.name}
          error={!!errors.name}
          onChange={handleChange}
        />
        <FormHelperText>{errors.name}</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <TextField
          name="email"
          error={!!errors.email}
          value={formData.email}
          onChange={handleChange}
        />
        <FormHelperText>{errors.email}</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.message}>
        <FormLabel>Message</FormLabel>
        <TextField
          name="message"
          multiline
          rows={4}
          error={!!errors.message}
          value={formData.message}
          onChange={handleChange}
        />
        <FormHelperText>{errors.message}</FormHelperText>
      </FormControl>

      <Row sx={{mt: 1}}>
        <Button variant="contained" color={submitError ? "error" : submitSuccess ? "success" : "primary"} type="submit" fullWidth sx={{mr: 2}}>
          {
            submitError ? <><Close sx={{mr: 1}}/>Please Try Again</> :
            submitSuccess ? <Check /> :
            isSubmitting ? <CircularProgress size={24} sx={{color: "#fff"}}/> : 'Submit'
          }
        </Button>
        <Button disabled={isSubmitting} variant="outlined" color={submitError ? "error" : "primary"} fullWidth sx={{ml: 2}} onClick={() => resetForm()}>
          Reset
        </Button>
      </Row>
    </form>
  );
};

export default ContactForm;
