import 'regenerator-runtime';
import RestaurantSource from '../data/restaurant-source';
import { createReviewTemplate, createButtonLoaderTemplate } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({ form, container }) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validateDataForm(form, container);
    });
  },

  setDataForm(form) {
    const data = new FormData(form);
    const dataForm = {};

    for (const key of data.keys()) {
      dataForm[key] = data.get(key);
    }

    return dataForm;
  },

  validateDataForm(form, container) {
    const data = this.setDataForm(form);
    const error = {
      status: false,
      keys: [],
    };

    for (const key in data) {
      if (data[key] === '') {
        error.status = true;
        error.keys.push(key);
      }
    }

    if (error.status === false) {
      this.sendData({
        data: JSON.stringify(data),
        form,
        container,
      });
    } else {
      this.errorHandler(error, form);
    }
  },

  errorHandler(error, form) {
    form.querySelectorAll('span').forEach((item) => {
      item.remove();
    });

    error.keys.forEach((key) => {
      const element = document.querySelector(`#${key}`);
      let keyId = '';

      if (key === 'name') { keyId = 'Nama'; }
      if (key === 'review') { keyId = 'Ulasan'; }

      const errorElement = document.createElement('span');
      errorElement.setAttribute('class', 'input-require');
      errorElement.innerText = `❗Kolom ${keyId} wajib diisi!`;
      element.after(errorElement);
    });
  },

  successHandler(form) {
    const formElement = form;
    formElement.querySelectorAll('span').forEach((item) => {
      item.remove();
    });
    formElement.querySelector('input[type=text]').value = '';
    formElement.querySelector('textarea').value = '';

    const messageElement = document.createElement('div');
    messageElement.classList.add('success-message');
    messageElement.innerHTML = '<p>Ulasan berhasil ditambahkan</p>';

    formElement.prepend(messageElement);

    setTimeout(() => {
      messageElement.remove();
    }, 5200);
  },

  async sendData({ data, form, container }) {
    console.log(`sendData data: ${data}`);

    try {
      const reviewForm = form;
      reviewForm.querySelector('button').innerHTML = createButtonLoaderTemplate();

      const response = await RestaurantSource.sendReviewRestaurant(data);
      this.successHandler(form);

      container.appendChild(createReviewTemplate(response));
      reviewForm.querySelector('button').innerHTML = 'Kirim Ulasan';
    } catch (err) {
      console.log(err);
    }
  },
};

export default ReviewInitiator;
