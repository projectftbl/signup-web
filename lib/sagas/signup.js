import { take, put, select } from 'redux-saga/effects';
import { reset } from 'redux-form';

import { SUCCESS } from '../ducks/signup';
import { create } from '@ftbl/member-web';

export function* signup() {
  while(true) {
    const { meta: { data }} = yield take(SUCCESS);
    const user = yield select(state => state.signup.user);

    yield put(create(assign({}, data, { userId: user.id, name: data.member })));
    yield put(reset('signup'));
  }
};
