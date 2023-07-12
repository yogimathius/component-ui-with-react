const movie = {
  id: 1,
  title: "Predator",
  year: 1991,
};

const titleNonDestr = movie.title;

const yearNonDestr = movie.year;
console.log(titleNonDestr, yearNonDestr);

const { title, year } = movie;

console.log(title, year);
