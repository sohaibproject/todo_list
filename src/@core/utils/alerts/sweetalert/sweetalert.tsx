import Swal from 'sweetalert2';
import { SweetalertOptions } from './types';

//convert errors to html content
export const errorsToHtml = (options?: SweetalertOptions) => {
  let errors = options?.errors;
  const textStart = options?.textStart;

  if (!errors || errors?.length === 0) return `<p class='text-gray-700 m-0'>Erreur inattendue ...</p>`; //default error message

  if (!Array.isArray(errors)) errors = [errors];

  //const className = textStart ? 'text-start':''

  let divParent = textStart ? '<div class ="text-start">' : '<div>';

  errors.forEach((item) => (divParent += `<p class='text-gray-700 mt-2'><span class="fw-bold"></span>${item}</p>`));
  return (divParent += '</div>');
};

export const errorAlert = async (options?: SweetalertOptions) => {
  Swal.fire({
    title: options?.title ?? 'error',
    // html: errorsToHtml({ errors: options?.errors, textStart: options?.textStart }),
    text: (options?.errors as string) ?? 'Something went wrong!',
    icon: 'error',
    showCloseButton: options?.showCloseButton ?? true,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: options?.confirmText ?? 'close',
    backdrop: options?.backdrop ?? true,
  });
  return true;
};

export const warningAlert = (options?: SweetalertOptions) => {
  Swal.fire({
    title: options?.title ?? 'Erreur',
    html: errorsToHtml({ errors: options?.errors, textStart: options?.textStart }),
    icon: 'warning',
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: 'Fermer',
  });
};

export const confirmAction = (options?: SweetalertOptions) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: options?.title ?? 'Are you sure ?',
      text: options?.text ?? 'You cannot go back!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: options?.confirmText ?? 'ok',
    }).then((result) => result.isConfirmed && resolve(true));
  });
};

// Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!',
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: 'Deleted!',
//       text: 'Your file has been deleted.',
//       icon: 'success',
//     });
//   }
// });

export const confirmDelete = (options?: SweetalertOptions) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: options?.title ?? 'Delete',
      text: options?.text ?? 'Are you sure delete this item !',
      icon: 'question',
      showCancelButton: true,
      /* confirmButtonColor: '#f1416c',*/
      /*  cancelButtonColor: '#009ef7',*/
      buttonsStyling: false,
      // customClass: {
      //   confirmButton: 'btn btn-danger text-white mx-2 py-2',
      //   cancelButton: 'btn btn-secondary  text-white py-2',
      // },
      cancelButtonText: 'Cancel',
      confirmButtonText: options?.confirmText ?? 'Delete',
    }).then((result) => result.isConfirmed && resolve(true));
  });
};
