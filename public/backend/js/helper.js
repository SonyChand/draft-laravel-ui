toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "timeOut": 3000,
    "positionClass": "toast-top-right",
    "preventDuplicates": true
}

console.log(toastr);
const toastSuccess = (message) => {
    toastr.success(message);
}

const toastError = (message) => {
    let resJson = JSON.parse(message);

    let errorText = '';

    for (let key in resJson.errors) {
        errorText = resJson.errors[key];
        break;
    }

    toastr.error(errorText);
}

const startLoading = () => {
    document.getElementById('loading-screen').style.display = 'block';
}

const stopLoading = () => {
    document.getElementById('loading-screen').style.display = 'none'; // Hide overlay
}

const reloadTable = () => {
    $('#yajra').DataTable().draw(false);
}

const resetForm = (form) => {
    $(form)[0].reset();
}

const resetValidation = () => {
    $('.is-invalid').removeClass('is-invalid');
    $('.is-valid').removeClass('is-valid');
    $('span.invalid-feedback').remove();
}


