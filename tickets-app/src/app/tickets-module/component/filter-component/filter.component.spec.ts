import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FilterComponent } from "./filter.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FilterComponent", () => {

  let fixture: ComponentFixture<FilterComponent>;
  let component: FilterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FilterComponent]
    });

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
