import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardMoviePage } from './card-movie.page';

describe('CardMoviePage', () => {
  let component: CardMoviePage;
  let fixture: ComponentFixture<CardMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
