import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AlertService} from "../../services/alert-service";


@Component({
  selector: 'app-alert-layout',
  templateUrl: './alert-layout.component.html',
  styleUrls: ['./alert-layout.component.scss']
})
export class AlertLayoutComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;

  public text: string = 'success';
  public type: string = 'success';

  alertSub!: Subscription;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alertSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeOut = setTimeout(() => {
        clearTimeout(timeOut);
        this.text = '';
      }, this.delay)
    })
  }

  ngOnDestroy() {
    if(this.alertSub) {
      this.alertSub.unsubscribe();
    }
  }

}
