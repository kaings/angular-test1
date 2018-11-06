import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map((r: any) => r.json()));
  }

  getTodos() {
    return this.http.get('...').pipe(map((r: any) => r.json()));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map((r: any) => r.json()));
  }

  delete(id) {
    return this.http.delete('...').pipe(map((r: any) => r.json()));
  }
}
