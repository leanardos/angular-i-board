import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<AddDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
  }

  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []]
      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
