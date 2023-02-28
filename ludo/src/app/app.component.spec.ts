import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent:AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Checking Dice Value to be greater than 0', () =>{
    appComponent.diceVal=0;
    appComponent.movePiece()
    let returnVal=appComponent.diceVal
    expect(returnVal).toBeGreaterThan(0);
  });

  it('Yellow start Value', () =>{
    let returnVal=appComponent.yellow_start
    expect(returnVal).toBe(39);
  });

  /**  it('Checking value of blue_turn for c=3', () =>{
    appComponent.blue_turn=false;
    appComponent.checkHome(3,5);
    let checkBlueTurn=appComponent.blue_turn;
    expect(checkBlueTurn).toBe(true);
  }); */

});
