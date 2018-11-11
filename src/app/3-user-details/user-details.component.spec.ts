/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import {ActivatedRoute, Router} from '@angular/router';
import {from, Observable, Subject} from 'rxjs';

class RouterStub {
  navigate(param: any[]) {}
}

class ActivatedRouteStub {
  // params: Observable<any> = from([]);

  private subject = new Subject();

  pass(value: any) {
    this.subject.next(value);
  }

  get params(): Observable<any> {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect user to users page after save()', () => {
    const router = TestBed.get(Router);
    const spyFunc = spyOn(router, 'navigate');

    component.save();

    expect(spyFunc).toHaveBeenCalledWith(['users']);
  });

  it('should navigate user to not-found page when invalid user id is passed', () => {
    const router = TestBed.get(Router);
    const spyFunc = spyOn(router, 'navigate');

    const activatedRoute: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    // const activatedRoute: ActivatedRouteStub = fixture.debugElement.injector.get(ActivatedRoute);
    /* ^ this will cause an error. The injector as example above will actually inject ActivatedRoute instead of
     * useClass ActivatedRouteStub. Usually this injector is used to inject some service into a component */

    activatedRoute.pass({id: 0});

    expect(spyFunc).toHaveBeenCalledWith(['not-found']);
  });
});
