import * as yup from 'yup';

export const feedValidator = yup.object({
  date: yup.date().required(),
  place: yup.string().required(),
  count: yup.number().min(1).required(),
  quantity: yup.number().min(1).required(),
  food: yup.string().required(),
  farmer: yup.string().required(),
});