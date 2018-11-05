import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

export class TodoService {
  constructor(private _httpClient: HttpClient) {
  }

  add(todo) {
    return this._httpClient.post('...', todo).pipe(map((r: any[]) => r));
  }

  getTodos() {
    return this._httpClient.get('...').pipe(map((r: any[]) => r));
  }

  delete(id) {
    return this._httpClient.delete('...').pipe(map((r: any[]) => r));
  }
}
