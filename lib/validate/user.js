import memoize from 'lru-memoize';
import { createValidator, required, minLength } from '@recipher/validation';
import { validate } from '@recipher/user-web';

export default memoize(10)(createValidator({
  email: [ required() ]
, name: [ required() ]
, password: [ minLength(8), validate.alphabetic(), validate.numeric(), validate.capital(), validate.symbol() ]
}));
