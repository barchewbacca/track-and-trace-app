// export for convenience.
export { ActivatedRoute } from '@angular/router';

import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();
  private snapshotParams = {};

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
    this.setSnapshotParams(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();
  readonly snapshot = {
    paramMap: {
      get: (param: string) => this.getSnapshotParam(param)
    }
  };

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }

  setSnapshotParams(params?: Params) {
    this.snapshotParams = params;
  }

  getSnapshotParam(key: string) {
    return this.snapshotParams[key];
  }
}
