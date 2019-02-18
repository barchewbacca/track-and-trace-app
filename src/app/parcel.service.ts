import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Parcel } from './parcel';
import NProgress from 'nprogress';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  private parcelUrl = 'http://localhost:4201/api/v1/parcels';
  public currentParcel = new BehaviorSubject<Parcel>(null);

  constructor(private http: HttpClient) {}

  setCurrentParcel(parcel: Parcel) {
    this.currentParcel.next(parcel);
  }

  getCurrentParcel(id: string): BehaviorSubject<Parcel> {
    if (!this.currentParcel.getValue()) {
      this.getParcel(id).subscribe(parcel => this.setCurrentParcel(parcel));
    }
    return this.currentParcel;
  }

  getParcel(id: string): Observable<Parcel> {
    const parcel = this.currentParcel.getValue();

    if (parcel && parcel.id === id) {
      return of(parcel);
    }

    if (!id.trim()) {
      return of(null);
    }

    const url = `${this.parcelUrl}/${id}`;
    return this.http.get<Parcel>(url).pipe(catchError(this.handleError<Parcel>(`getParcel id=${id}`)));
  }

  startLoader(): void {
    NProgress.start();
  }

  stopLoader(): void {
    NProgress.done();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // DO something on failed operation
      // console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
