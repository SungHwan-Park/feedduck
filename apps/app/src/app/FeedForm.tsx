import { useHistory } from 'react-router';
import axios from 'axios';
import { FormikHandlers, FormikHelpers, useFormik } from "formik";
import { 
  Typography,
  Box, 
  TextField, 
  Container, 
  Paper, 
  InputAdornment, 
  Button 
} from "@material-ui/core";
import { DateTimePicker } from '@material-ui/pickers';
import { feedValidator } from "./validateor";
import { IFeed } from '@freshworks/shared';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const FeedForm = () => {
  const history = useHistory();

  const [ submited, setSubmited ] = useState(false);

  const submit = (values: IFeed, { resetForm }: FormikHelpers<IFeed>) => {
    axios.post('/api/feeds', values).then(res => {
      setSubmited(true);
      resetForm();
    });
  }
  const formik = useFormik({
    initialValues: { 
      name: "",
      food: "",
      place: "",
      date: new Date().toISOString(),
      count: 0,
      quantity: 0
    },
    validationSchema: feedValidator,
    onSubmit: submit,
  });

  const { 
    errors, 
    touched, 
    isValid, 
    isSubmitting, 
    values, 
    handleSubmit, 
    handleChange, 
    handleBlur 
  } = formik;
      
  return (
    <Container maxWidth="sm">
      <Paper elevation={0}>
      <Box textAlign="center" mt={3}>
        <Typography id="title" variant="h6">
          { submited ? "Your feed has been submitted!" : "How do you feed your ducks?"}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="end" mt={2}>
        <Link to="/app">View Feeds</Link>
      </Box>
      <Box display="flex" height="70vh" alignItems="center" justifyContent="center">
        <Box minWidth="70%">
          <form onSubmit={handleSubmit}>
            <Box my={2}>
              <DateTimePicker
                autoOk
                id="date"
                inputVariant="outlined"
                format="yyyy/MM/dd HH:mm"
                label="Date"
                value={values.date}
                onChange={(value) => {
                  formik.setFieldValue('date', value);
                }}
                onBlur={handleBlur}
                error={touched.date && Boolean(errors.date)}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="count"
                name="count"
                type="number"
                label="Count"
                variant="outlined"
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.count && Boolean(errors.count)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">ducks</InputAdornment>,
                }}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="quantity"
                name="quantity"
                type="number"
                label="Quantity"
                variant="outlined"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.quantity && Boolean(errors.quantity)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="food"
                name="food"
                type="text"
                label="Food"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.food}
                error={touched.food && Boolean(errors.food)}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="place"
                name="place"
                type="text"
                label="Place"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
                error={touched.place && Boolean(errors.place)}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="name"
                name="name"
                type="text"
                label="name"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
              />
            </Box>
            <Box my={2}>
              <Button type="submit" variant="contained" disabled={isSubmitting || !isValid}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      </Paper>
    </Container>
  );
};