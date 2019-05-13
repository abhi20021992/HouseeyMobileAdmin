import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Lead, VALIDATION_MESSAGE, LeadConfig } from '../../../../@core/models/Lead';
import { LeadService } from '../../../../@core/services/leadmanagement/lead.service';
import { CommonService } from '../../../../@core/services/common/common.service';

@Component({
  selector: 'ngx-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  @Input() data: Lead;
  @Input() leadConfig: LeadConfig;
  leadForm: FormGroup;
  constructor(
    protected ref: NbDialogRef<EditDialogComponent>,
    private leadService: LeadService,
    public commonService: CommonService,
  ) {}
  ngOnInit() {
    this.leadForm = new FormGroup({
      FirstName: new FormControl(this.data.FirstName, [Validators.required]),
      LastName: new FormControl(this.data.LastName, []),
      Email: new FormControl(this.data.Email, [Validators.required]),
      Phone: new FormControl(this.data.Phone, []),
      Mobile: new FormControl(this.data.Mobile, [Validators.required, Validators.minLength(9)]),
      Address: new FormControl(this.data.Address, []),
      LeadStage: new FormControl(this.data.LeadStage, [Validators.required]),
      LeadSource: new FormControl(this.data.LeadSource, [Validators.required]),
      LeadStatus: new FormControl(this.data.LeadStatus, []),
      ProjectName: new FormControl(this.data.ProjectName, [Validators.required]),
      Company: new FormControl(this.data.Company, []),
      Website: new FormControl(this.data.Website, []),
      NoofBedRoom: new FormControl(this.data.NoofBedRoom ? this.data.NoofBedRoom : 1, [Validators.required]),
      NoofKitchen: new FormControl(this.data.NoofKitchen, []),
      Location: new FormControl(this.data.Location, [Validators.required]),
      Budget: new FormControl(this.data.Budget, [Validators.required]),
      Possession: new FormControl(this.data.Possession, [Validators.required]),
      Size: new FormControl(this.data.Size, []),
      PropertyType: new FormControl(this.data.PropertyType, [Validators.required]),
      PropertyAge: new FormControl(this.data.PropertyAge, []),
      Furnished: new FormControl(this.data.Furnished, []),
      Vastu: new FormControl(this.data.Vastu, [Validators.required]),
      Preference: new FormControl(this.data.Preference, []),
      City: new FormControl(this.data.City, [Validators.required]),
      Type: new FormControl(this.data.Type, []),
      LeadOwner: new FormControl(this.data.LeadOwner, []),
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.leadService.save(this.mapInput(this.leadForm.value));
    this.ref.close();
  }

  public get control() {
    return this.leadForm.controls;
  }

  private mapInput(formData: Lead) {
    for (const formElement in formData) {
      if (this.data.hasOwnProperty(formElement)) {
        this.data[formElement] = formData[formElement];
      }
    }
    return this.data;
  }
}
