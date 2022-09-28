let data = localStorage.getItem('data');

if (!data) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem('data'));
};

export default data;