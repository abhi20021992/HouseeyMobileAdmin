import { Component, OnInit, Input } from '@angular/core';
import { LeadConfig, Lead } from '../../../../@core/models/Lead';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { LeadService } from '../../../../@core/services/leadmanagement/lead.service';
import { CommonService } from '../../../../@core/services/common/common.service';

@Component({
  selector: 'ngx-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `,
  ],
})
export class AddDialogComponent implements OnInit {
  @Input() leadConfig: LeadConfig;
  leadForm: FormGroup;
  data: Lead;
  constructor(
    protected ref: NbDialogRef<EditDialogComponent>,
    private leadService: LeadService,
    public commonService: CommonService,
  ) {}

  ngOnInit() {
    this.leadForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', []),
      Email: new FormControl('', [Validators.required]),
      Phone: new FormControl('', []),
      Mobile: new FormControl('', [Validators.required, Validators.minLength(9)]),
      Address: new FormControl('', []),
      LeadStage: new FormControl('', [Validators.required]),
      LeadSource: new FormControl('', [Validators.required]),
      LeadStatus: new FormControl('', []),
      ProjectName: new FormControl('', [Validators.required]),
      Company: new FormControl('', []),
      Website: new FormControl('', []),
      NoofBedRoom: new FormControl('', [Validators.required]),
      NoofKitchen: new FormControl('', []),
      Location: new FormControl('', [Validators.required]),
      Budget: new FormControl('', [Validators.required]),
      Possession: new FormControl('', [Validators.required]),
      Size: new FormControl('', []),
      PropertyType: new FormControl('', [Validators.required]),
      PropertyAge: new FormControl('', []),
      Furnished: new FormControl('', []),
      Vastu: new FormControl('', [Validators.required]),
      Preference: new FormControl('', []),
      City: new FormControl('', [Validators.required]),
      Type: new FormControl('', []),
      LeadOwner: new FormControl('', []),
    });
  }

  cancel() {
    this.ref.close();
  }

  public get control() {
    return this.leadForm.controls;
  }

  submit() {
    // const leadToBeEdited = this.mapInput(this.leadForm.value);
    // this.leadService.save(leadToBeEdited);
    this.ref.close('LeadCreated');
  }
}
