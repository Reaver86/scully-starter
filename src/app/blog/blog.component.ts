import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { isScullyRunning, ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent {

  showTitle = !isScullyRunning();
  routes$: Observable<ScullyRoute[]>;

  constructor(private scullyRoutesService: ScullyRoutesService) {
    this.routes$ = this.scullyRoutesService.available$;
  }
}
