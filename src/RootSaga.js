import { takeEvery, put } from "redux-saga/effects";

export function* fetchPosts() {
    yield takeEvery("FETCH_POSTS", function*() {
      try {
        let data = yield fetch("http://jsonplaceholder.typicode.com/posts").then(
          res => res.json()
        );
        yield put({ type: "FETCH_POSTS_WATCH", payload: data });
      } catch (e) {
        console.log(e);
      }
    });
  }