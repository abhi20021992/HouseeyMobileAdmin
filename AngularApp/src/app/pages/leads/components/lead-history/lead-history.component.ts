import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-lead-history',
  templateUrl: './lead-history.component.html',
  styleUrls: ['./lead-history.component.scss'],
})
export class LeadHistoryComponent implements OnInit {
  constructor(protected ref: NbDialogRef<LeadHistoryComponent>) {}

  ngOnInit() {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
