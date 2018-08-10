import './index.html';
import 'tachyons/css/tachyons.min.css';
import h from 'hyperscript';
import hh from 'hyperscript-helpers';
import R from 'ramda';

const { td, th, tr, thead, tbody, table } = hh(h);

function cell(tag, className, content) {
  return tag({ className }, content);
}

function mealRow(className, { description, calories }) {
  return tr({ className }, [
    cell(td, 'pa2', description),
    cell(td, 'pa2 tr', calories)
  ]);
}

function mealsBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}

function headerRow(className) {
  return tr({ className }, [
    cell(th, 'pa2 tl', 'Description'),
    cell(th, 'pa2 tr', 'Calories')
  ]);
}
