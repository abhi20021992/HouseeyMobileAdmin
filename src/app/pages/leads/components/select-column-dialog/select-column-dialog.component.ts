import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-select-column-dialog',
  templateUrl: './select-column-dialog.component.html',
  styleUrls: ['./select-column-dialog.component.scss'],
})
export class SelectColumnDialogComponent implements OnInit {
  constructor(protected ref: NbDialogRef<SelectColumnDialogComponent>) {}

  ngOnInit() {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
