import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TicketComponent } from "./ticket.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TicketComponent", () => {

  let fixture: ComponentFixture<TicketComponent>;
  let component: TicketComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TicketComponent]
    });

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
