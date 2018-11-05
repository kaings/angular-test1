import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {from} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null, null);
    component = new TodosComponent(service);
  });

  it('should set todos property from the items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([
        [1, 2, 3, 4, 5, 6, 7, 8]
      ]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(8);
  });
});
