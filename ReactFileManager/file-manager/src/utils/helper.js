import * as R from 'ramda';

const flatten = require('flat'),
unflatten = require('flat').unflatten,
renameKeys = R.curry((keysMap, obj) => R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))), // isDirectory: true,
          
transformObj = (obj) => R.compose(R.dissoc('name'), R.mergeDeepRight(obj), renameKeys({"name": 'title' }), R.when(R.propEq('type', 'FOLDER'), 
R.compose(R.set(R.lensProp('isDirectory'), true), R.set(R.lensProp('expanded'), false))),  R.set(R.lensProp('id'), 0))(obj),
deepMap = (obj) => R.map(R.cond([
  [R.has('name'), R.compose(deepMap, transformObj)],
  [R.is(Array), deepMap], 
  [R.T, R.identity]
]), obj);


export const transForm = fileProvider => {
     let depthCounter = 1;
     return R.compose(R.of, R.merge({type: "FOLDER", id: 1, title: 'root', isDirectory: true, expanded: false }),  (obj) => unflatten(obj),   R.fromPairs, R.reduce((acc, item) => {
   item = R.when(R.compose(R.is(Number), R.last), (val) => { 
     ++depthCounter;
     return R.set(R.lensIndex(1), depthCounter, val ); })(item);
   return R.append(item, acc);
 }, []),  R.sortBy(X =>  (X[0].match(/\./gmi) || []).length), R.toPairs, (obj) => flatten(obj),  deepMap, R.objOf('children'))(fileProvider);
  }

  
