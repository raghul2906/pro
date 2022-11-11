/* tslint:disable:no-unused-variable */
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router} from "@angular/router";
import { LoanDashboardComponent } from "./loan-dashboard/loan-dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AccountinformationComponent } from "./accountinformation/accountinformation.component";
import { AppComponent } from "./app.component";
import { routes } from "./app-routing.module";
describe(" AccountinformationComponent Router: AppRouter: App", () => {
  let location: Location;
  let router: Router;
  let fixture;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)],
        declarations: [LoanDashboardComponent, AccountinformationComponent, MyProfileComponent, AppComponent]
      });
  
      router = TestBed.get(Router);
      location = TestBed.get(Location);
  
      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    });
  
    it("fakeAsync works", fakeAsync(() => {
      let promise = new Promise(resolve => {
        setTimeout(resolve, 10);
      });
      let done = false;
      promise.then(() => (done = true));
      tick(50);
      expect(done).toBeTruthy();
    }));
  
    it('navigate to "loan" takes you to /loan', fakeAsync(() => {
      router.navigate(["/loan-dashboard"]).then(() => {
        expect(location.path()).toBe("/loan-dashboard");
      });
    }));
  
  });