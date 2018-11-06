/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import {from} from 'rxjs';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [ HttpClientModule ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('Should load todos from the server', () => {
    const service = TestBed.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3, 4, 5, 6, 7, 8] ]));

    // different from unit-test, in integration test, when test begins, ngOnInit will be called.
    // This means if detectChanges() is called in beforeEach(), it will trigger getTodos which will
    // return todos=0 instead of fakeCall returning array. Therefore, detectChanges must be
    // put after the fakeCall/ returnValue
    fixture.detectChanges();

    expect(component.todos.length).toBe(8);
  });
});
