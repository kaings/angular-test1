import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {from, throwError} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
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


  /* test for func add() */

  it('should call the server when todo new item is added', () => {
    const spyFunc = spyOn(service, 'add').and.callFake(() => {
      return from([]);
    });

    component.add();

    expect(spyFunc).toHaveBeenCalled();
  });

  it('should add new item into todos returned from the server', () => {
    const newTodo = { title: '... ' };

    /*
    const spyFunc = spyOn(service, 'add').and.callFake(() => {
      return from([newTodo]);
    });
    */

    /* use returnValue method also works to replace callFake when
    the function returns value */
    const spyFunc = spyOn(service, 'add').and.returnValue(from([newTodo]));

    component.add();

    expect(component.todos.indexOf(newTodo)).not.toBe(-1);
  });

  it('should set the message property when the server returns error', () => {
    const errMsg = '[server] something went wrong!!';

    const spyFunc = spyOn(service, 'add').and.returnValue(throwError(errMsg));

    component.add();

    expect(component.message).toBe(errMsg);
  });
});
