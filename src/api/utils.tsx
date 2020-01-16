export const parseErrors = (errors: any) => {
  if (errors.response) {
    console.log(errors.response.data);
    console.log(errors.response.status);
    console.log(errors.response.headers);
  } else if (errors.request) {
    console.log(errors.request);
  } else {
    console.log('Error', errors.message);
  }
}
